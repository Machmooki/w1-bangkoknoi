"use client";

/**
 * Card list + live map for /test-minimap only (not wired into /experiences).
 *
 * Click a card → fly the camera to that trip's canal route.
 * Click a glowing landmark on the map → zoom smoothly into that point.
 * Spacebar is ignored on purpose: focusing a fake "button" + Space was
 * scrolling the page instead of moving between landmarks.
 */

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import type { BoatTrip } from "@/lib/data/boatTrips";

const BoatTripMap = dynamic(() => import("./BoatTripMap"), {
  ssr: false,
  loading: () => (
    <div className="trip-map-loading" role="status">
      Loading map…
    </div>
  ),
});

export function BoatTripExplorer({ trips }: { trips: BoatTrip[] }) {
  const [activeTripId, setActiveTripId] = useState(trips[0]?.id ?? "");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== " " && e.code !== "Space") return;
      // This sandbox is the only mount of BoatTripExplorer. Swallow Space
      // so it cannot scroll the page (the old "next landmark" shortcut).
      e.preventDefault();
    };
    window.addEventListener("keydown", onKeyDown, { capture: true });
    return () => window.removeEventListener("keydown", onKeyDown, { capture: true });
  }, []);

  const selectTrip = useCallback((id: string) => {
    setActiveTripId(id);
  }, []);

  return (
    <div className="trip-explorer" ref={rootRef}>
      <div className="trip-explorer-cards">
        {trips.map((trip) => {
          const isActive = trip.id === activeTripId;
          return (
            <div
              key={trip.id}
              className={[
                "trip-card",
                trip.fullWidth ? "trip-card-fullwidth" : "",
                isActive ? "is-active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => selectTrip(trip.id)}
            >
              <div className="trip-card-top">
                <div className={trip.badgeVariant === "special" ? "trip-duration trip-duration-special" : "trip-duration"}>
                  {trip.badge}
                </div>
                <h3 className="trip-title">{trip.title}</h3>
                <p className="trip-thai-sub">{trip.subtitle}</p>
              </div>

              <div
                className="trip-card-body"
                style={trip.fullWidth ? { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" } : undefined}
              >
                <div>
                  {trip.sessions && trip.sessions.length > 0 && (
                    <>
                      <div className="trip-sch-label">{trip.scheduleLabel}</div>
                      <div className="trip-sessions">
                        {trip.sessions.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>
                    </>
                  )}
                  <div className="trip-route-label" style={trip.sessions?.length ? { marginTop: 16 } : undefined}>
                    {trip.routeLabel}
                  </div>
                  <p className="trip-route-note">{trip.routeNote}</p>
                </div>

                <div style={trip.fullWidth ? { display: "flex", flexDirection: "column", gap: 16 } : undefined}>
                  {trip.pricing.length === 1 && (
                    <div className="trip-boat-row">
                      <div className="trip-boat-tag">
                        {trip.pricing[0].boat} &nbsp;·&nbsp; {trip.pricing[0].capacityLabel}
                      </div>
                      {trip.pricing[0].priceThb != null && (
                        <div className="trip-price-tag">฿{trip.pricing[0].priceThb.toLocaleString()}</div>
                      )}
                    </div>
                  )}

                  {trip.pricing.length > 1 && (
                    <div className="trip-pricing-table">
                      {trip.pricing.map((row) => (
                        <div className="trip-pricing-row" key={row.boat}>
                          <span>
                            {row.boat} &nbsp;·&nbsp; {row.capacityLabel}
                          </span>
                          {row.priceThb != null && <strong>฿{row.priceThb.toLocaleString()}</strong>}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="trip-inclusions">
                    {trip.inclusions.map((item) => (
                      <span key={item}>✦ {item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="trip-explorer-map">
        <BoatTripMap trips={trips} activeTripId={activeTripId} />
      </div>
    </div>
  );
}
