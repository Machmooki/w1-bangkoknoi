import type { Metadata } from "next";
import { BoatTripExplorer } from "@/components/canal-journey/BoatTripExplorer";
import { BOAT_TRIPS } from "@/lib/data/boatTrips";
import "./sandbox.css";

/**
 * SANDBOX ONLY — interactive canal map is not on /experiences yet.
 * Click a trip card to fly along that waterway. Click a landmark pin
 * on the map to zoom in smoothly. Coordinates follow OpenStreetMap's
 * Khlong Om Non / Khlong Bangkok Noi centerline at the real W1 jetty
 * in Bang Yai, Nonthaburi.
 */
export const metadata: Metadata = {
  title: "Sandbox — Canal Journey Map",
  robots: { index: false, follow: false },
};

export default function TestMinimapPage() {
  return (
    <main className="canal-sandbox-page">
      <div className="canal-sandbox-header">
        <div className="canal-sandbox-eyebrow">Sandbox · Not linked from nav</div>
        <h1 className="canal-sandbox-title">W1 Boat Trip · Bangkok Noi Canal</h1>
        <p className="canal-sandbox-hint">
          Click a journey card to fly the camera along the real canal. Click any glowing point on the map to zoom in
          smoothly on that landmark — Spacebar is disabled here so it won&apos;t scroll the page.
        </p>
      </div>
      <div className="canal-sandbox-body">
        <BoatTripExplorer trips={BOAT_TRIPS} />
      </div>
    </main>
  );
}
