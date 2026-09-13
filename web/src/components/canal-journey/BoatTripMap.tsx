"use client";

/**
 * Cinematic 3D canal map (sandbox: /test-minimap).
 *
 * Visual language follows a photoreal "tracking shot" (satellite + terrain,
 * camera looking along the water) rather than a north-up schematic. Click a
 * trip card to fly along that route; click a landmark to punch in on it,
 * still facing the canal's heading.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { BoatTrip, CanalLandmark, LandmarkKind } from "@/lib/data/boatTrips";
import { cinematicCamera, headingDegrees, headingNear, type LngLat } from "@/lib/data/khlongBangkokNoi";

const LANDMARK_FOCUS_ZOOM = 17.8;
const LANDMARK_FOCUS_PITCH = 68;

/** Photoreal Standard Satellite — 3D objects + real aerial imagery. */
const MAP_STYLE = "mapbox://styles/mapbox/standard-satellite";

const ROUTE_SOURCE_ID = "boat-trip-route";
const ROUTE_LINE_LAYER_ID = "boat-trip-route-line";
const LANDMARK_3D_SOURCE_ID = "landmark-volumes";
const LANDMARK_3D_LAYER_ID = "landmark-volumes-extrusion";
const DEM_SOURCE_ID = "mapbox-dem";

const ANT_DASH_SEQUENCE: number[][] = [
  [0, 4, 3],
  [0.5, 4, 2.5],
  [1, 4, 2],
  [1.5, 4, 1.5],
  [2, 4, 1],
  [2.5, 4, 0.5],
  [3, 4, 0],
  [0, 0.5, 3, 3.5],
  [0, 1, 3, 3],
  [0, 1.5, 3, 2.5],
  [0, 2, 3, 2],
  [0, 2.5, 3, 1.5],
  [0, 3, 3, 1],
  [0, 3.5, 3, 0.5],
];

const VOLUME: Record<LandmarkKind, { height: number; base: number; size: number; color: string }> = {
  temple: { height: 42, base: 0, size: 0.00014, color: "#E8CC9A" },
  market: { height: 16, base: 0, size: 0.00012, color: "#C4A574" },
  pier: { height: 8, base: 0, size: 0.00009, color: "#F5F0E8" },
};

function footprint(center: LngLat, size: number): number[][] {
  const [lng, lat] = center;
  const dx = size * 0.72;
  return [
    [lng, lat + size],
    [lng + dx, lat],
    [lng, lat - size],
    [lng - dx, lat],
    [lng, lat + size],
  ];
}

function landmarkVolumes(landmarks: CanalLandmark[]) {
  return {
    type: "FeatureCollection" as const,
    features: landmarks.map((lm) => {
      const vol = VOLUME[lm.kind];
      return {
        type: "Feature" as const,
        properties: { kind: lm.kind, height: vol.height, base: vol.base, color: vol.color },
        geometry: { type: "Polygon" as const, coordinates: [footprint(lm.coordinates, vol.size)] },
      };
    }),
  };
}

function markerHtml(landmark: CanalLandmark): string {
  if (landmark.kind === "temple") {
    return `
      <span class="canal-marker-label">${landmark.name}</span>
      <span class="canal-marker-3d" aria-hidden="true">
        <span class="prang-spire"></span>
        <span class="prang-mid"></span>
        <span class="prang-base"></span>
      </span>
      <span class="canal-marker-ring"></span>
    `;
  }
  if (landmark.kind === "pier") {
    return `
      <span class="canal-marker-label">${landmark.name}</span>
      <span class="canal-boat" aria-hidden="true"></span>
      <span class="canal-marker-ring"></span>
    `;
  }
  return `
    <span class="canal-marker-label">${landmark.name}</span>
    <span class="canal-marker-dot"></span>
    <span class="canal-marker-ring"></span>
  `;
}

type Status = "loading" | "ready" | "error" | "missing-token";

export default function BoatTripMap({
  trips,
  activeTripId,
}: {
  trips: BoatTrip[];
  activeTripId: string;
}) {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const readyRef = useRef(false);
  const tripRef = useRef<BoatTrip | null>(null);

  const [status, setStatus] = useState<Status>(() =>
    process.env.NEXT_PUBLIC_MAPBOX_TOKEN ? "loading" : "missing-token"
  );

  const focusLandmark = useCallback((landmark: CanalLandmark) => {
    const map = mapRef.current;
    if (!map) return;
    markersRef.current.forEach((m) => {
      const node = m.getElement();
      node.classList.toggle("canal-marker--active", node.dataset.landmarkId === landmark.id);
    });

    const route = tripRef.current?.routeCoordinates;
    const bearing = route && route.length > 1 ? headingNear(route, landmark.coordinates) : map.getBearing();

    map.flyTo({
      center: landmark.coordinates,
      zoom: LANDMARK_FOCUS_ZOOM,
      pitch: LANDMARK_FOCUS_PITCH,
      bearing,
      duration: 1700,
      curve: 1.12,
      speed: 0.65,
      essential: true,
    });
  }, []);

  const applyTrip = useCallback((trip: BoatTrip) => {
    const map = mapRef.current;
    if (!map) return;
    tripRef.current = trip;

    const routeSource = map.getSource(ROUTE_SOURCE_ID) as mapboxgl.GeoJSONSource | undefined;
    routeSource?.setData({
      type: "Feature",
      properties: {},
      geometry: { type: "LineString", coordinates: trip.routeCoordinates },
    });

    const volumeSource = map.getSource(LANDMARK_3D_SOURCE_ID) as mapboxgl.GeoJSONSource | undefined;
    volumeSource?.setData(landmarkVolumes(trip.landmarks));

    const destId = trip.landmarks[trip.landmarks.length - 1]?.id;
    const start = trip.routeCoordinates[0];
    const look = trip.routeCoordinates[Math.min(trip.routeCoordinates.length - 1, 6)];
    const boatHeading = headingDegrees(start, look);

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = trip.landmarks.map((landmark) => {
      const el = document.createElement("div");
      el.className = [
        "canal-marker",
        `canal-marker--${landmark.kind}`,
        landmark.id === destId ? "canal-marker--destination" : "",
      ]
        .filter(Boolean)
        .join(" ");
      el.dataset.landmarkId = landmark.id;
      el.setAttribute("aria-label", landmark.name);
      el.innerHTML = markerHtml(landmark);
      el.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        focusLandmark(landmark);
      });
      const marker = new mapboxgl.Marker({ element: el, anchor: "bottom", clickTolerance: 12 })
        .setLngLat(landmark.coordinates)
        .addTo(map);
      if (landmark.kind === "pier") marker.setRotation(boatHeading);
      return marker;
    });

    const cam = cinematicCamera(trip.routeCoordinates);
    map.flyTo({
      center: cam.center,
      zoom: cam.zoom,
      pitch: cam.pitch,
      bearing: cam.bearing,
      duration: 2200,
      curve: 1.4,
      essential: true,
    });
  }, [focusLandmark]);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token || !mapDivRef.current || mapRef.current) return;
    mapboxgl.accessToken = token;

    const initialTrip = trips.find((t) => t.id === activeTripId) ?? trips[0];
    if (!initialTrip) return;
    tripRef.current = initialTrip;

    let dashRafId = 0;
    const cam = cinematicCamera(initialTrip.routeCoordinates);

    const map = new mapboxgl.Map({
      container: mapDivRef.current,
      style: MAP_STYLE,
      center: cam.center,
      zoom: cam.zoom,
      pitch: cam.pitch,
      bearing: cam.bearing,
      antialias: true,
      attributionControl: true,
    });
    mapRef.current = map;
    map.keyboard.disable();
    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), "bottom-right");

    map.on("error", (e) => {
      console.error("[BoatTripMap] map error:", e?.error);
      setStatus("error");
    });

    const paintScene = () => {
      cancelAnimationFrame(dashRafId);
      try {
        map.setConfigProperty("basemap", "lightPreset", "dusk");
        map.setConfigProperty("basemap", "show3dObjects", true);
        map.setConfigProperty("basemap", "showPointOfInterestLabels", false);
        map.setConfigProperty("basemap", "showPlaceLabels", false);
        map.setConfigProperty("basemap", "showRoadLabels", false);
      } catch {
        // Older styles without a Standard config fragment — satellite still works.
      }

      if (!map.getSource(DEM_SOURCE_ID)) {
        map.addSource(DEM_SOURCE_ID, {
          type: "raster-dem",
          url: "mapbox://mapbox.mapbox-terrain-dem-v1",
          tileSize: 512,
          maxzoom: 14,
        });
      }
      map.setTerrain({ source: DEM_SOURCE_ID, exaggeration: 1.25 });
      map.setFog({
        color: "rgb(186, 168, 142)",
        "high-color": "rgb(92, 118, 148)",
        "horizon-blend": 0.12,
        range: [0.6, 10],
        "space-color": "rgb(12, 18, 28)",
        "star-intensity": 0,
      });

      if (!map.getSource(ROUTE_SOURCE_ID)) {
        map.addSource(ROUTE_SOURCE_ID, {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: { type: "LineString", coordinates: initialTrip.routeCoordinates },
          },
        });
      }

      if (!map.getSource(LANDMARK_3D_SOURCE_ID)) {
        map.addSource(LANDMARK_3D_SOURCE_ID, {
          type: "geojson",
          data: landmarkVolumes(initialTrip.landmarks),
        });
      }

      if (!map.getLayer(LANDMARK_3D_LAYER_ID)) {
        map.addLayer({
          id: LANDMARK_3D_LAYER_ID,
          type: "fill-extrusion",
          slot: "middle",
          source: LANDMARK_3D_SOURCE_ID,
          minzoom: 13,
          paint: {
            "fill-extrusion-color": ["get", "color"],
            "fill-extrusion-height": ["get", "height"],
            "fill-extrusion-base": ["get", "base"],
            "fill-extrusion-opacity": 0.92,
            "fill-extrusion-vertical-gradient": true,
          },
        });
      }

      if (!map.getLayer("boat-trip-route-glow")) {
        map.addLayer({
          id: "boat-trip-route-glow",
          type: "line",
          slot: "top",
          source: ROUTE_SOURCE_ID,
          layout: { "line-cap": "round", "line-join": "round" },
          paint: {
            "line-color": "#F5E6C8",
            "line-width": 10,
            "line-blur": 1.4,
            "line-opacity": 0.45,
            "line-emissive-strength": 0.8,
          },
        });
      }

      if (!map.getLayer(ROUTE_LINE_LAYER_ID)) {
        map.addLayer({
          id: ROUTE_LINE_LAYER_ID,
          type: "line",
          slot: "top",
          source: ROUTE_SOURCE_ID,
          layout: { "line-cap": "round", "line-join": "round" },
          paint: {
            "line-color": "#FAF7F2",
            "line-width": 2.2,
            "line-opacity": 0.95,
            "line-dasharray": [0, 4, 3],
            "line-emissive-strength": 1,
          },
        });
      }

      readyRef.current = true;
      setStatus("ready");
      applyTrip(initialTrip);

      let step = 0;
      let lastTick = 0;
      const animateDash = (time: number) => {
        dashRafId = requestAnimationFrame(animateDash);
        if (time - lastTick < 70) return;
        lastTick = time;
        step = (step + 1) % ANT_DASH_SEQUENCE.length;
        if (map.getLayer(ROUTE_LINE_LAYER_ID)) {
          map.setPaintProperty(ROUTE_LINE_LAYER_ID, "line-dasharray", ANT_DASH_SEQUENCE[step]);
        }
      };
      dashRafId = requestAnimationFrame(animateDash);
    };

    map.on("style.load", paintScene);

    return () => {
      cancelAnimationFrame(dashRafId);
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      readyRef.current = false;
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!readyRef.current) return;
    const trip = trips.find((t) => t.id === activeTripId) ?? trips[0];
    if (trip) applyTrip(trip);
  }, [trips, activeTripId, applyTrip]);

  if (status === "missing-token") {
    return (
      <div className="trip-map-fallback">
        <h2>Mapbox token missing</h2>
        <p>
          Add <code>NEXT_PUBLIC_MAPBOX_TOKEN=pk.xxxxx</code> to <code>web/.env.local</code>, then
          restart <code>npm run dev</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="trip-map-shell">
      <div className="trip-map-canvas" ref={mapDivRef} />
      <div className="trip-map-vignette" aria-hidden />
      {status === "error" && (
        <div className="trip-map-fallback trip-map-fallback--overlay">
          <h2>Map failed to load</h2>
          <p>Check your Mapbox token and network connection, then check the console.</p>
        </div>
      )}
      {status === "loading" && (
        <div className="trip-map-loading" role="status">
          Loading map…
        </div>
      )}
    </div>
  );
}
