/**
 * Boat trip catalog for the /test-minimap canal map
 * (components/canal-journey/BoatTripExplorer.tsx + BoatTripMap.tsx).
 *
 * Card copy matches /experiences. Route geometry is sliced from the
 * OpenStreetMap canal centerlines in `khlongBangkokNoi.ts` so the gold
 * line follows the water, not the streets.
 *
 * Landmark pins are snapped onto those same vertices (the temple
 * buildings sit on the bank, a few dozen metres off the water).
 */

import {
  KHLONG_BANGKOK_NOI_SOUTH,
  KHLONG_BANG_KHU_WIANG,
  KHLONG_OM_NON,
  W1_PIER_INDEX,
  W1_PIER_ON_CANAL,
  boundsCenter,
  joinLines,
  sliceLine,
  type LngLat,
} from "./khlongBangkokNoi";

export type { LngLat };

export type LandmarkKind = "pier" | "temple" | "market";

export interface CanalLandmark {
  id: string;
  name: string;
  nameTh?: string;
  coordinates: LngLat;
  kind: LandmarkKind;
  verified: boolean;
}

export interface CameraSettings {
  center: LngLat;
  zoom: number;
  pitch: number;
  bearing: number;
}

export type BoatVessel = "Genesis 1" | "Genesis 2" | "Genesis 3";

export interface BoatTripPricingRow {
  boat: BoatVessel;
  capacityLabel: string;
  priceThb?: number;
}

export interface BoatTrip {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeVariant: "special" | "default";
  scheduleLabel?: string;
  sessions?: string[];
  routeLabel: string;
  routeNote: string;
  pricing: BoatTripPricingRow[];
  inclusions: string[];
  fullWidth?: boolean;
  routeCoordinates: LngLat[];
  landmarks: CanalLandmark[];
  cameraSettings: CameraSettings;
}

const W1_PIER: CanalLandmark = {
  id: "w1-pier",
  name: "W1 Pier",
  nameTh: "ท่าเรือ W1",
  coordinates: W1_PIER_ON_CANAL,
  kind: "pier",
  verified: true,
};

function shot(route: LngLat[], extras: Partial<CameraSettings> = {}): CameraSettings {
  return {
    center: boundsCenter(route),
    zoom: 15.2,
    pitch: 58,
    bearing: -18,
    ...extras,
  };
}

/** Sai Mu: short hop north of the jetty along Om Non / Bangkok Noi. */
const SAI_MU_ROUTE = sliceLine(KHLONG_OM_NON, W1_PIER_INDEX, 67);

/** Wat Takian: Om Non south-east to the Bang Khu Wiang branch, then along that canal. */
const TAKIAN_ROUTE = joinLines(
  sliceLine(KHLONG_OM_NON, W1_PIER_INDEX, 79),
  sliceLine(KHLONG_BANG_KHU_WIANG, 0, 17)
);

/** Northern riverways: jetty north along Om Non to Wat Rat Prakhong Tham. */
const NORTHERN_ROUTE = sliceLine(KHLONG_OM_NON, W1_PIER_INDEX, 53);

/** Southern riverways: jetty south-east on Om Non, then Khlong Bangkok Noi to Wat Chaiyaphruek. */
const SOUTHERN_ROUTE = joinLines(
  sliceLine(KHLONG_OM_NON, W1_PIER_INDEX, 123),
  KHLONG_BANGKOK_NOI_SOUTH
);

/** Heritage: direct northern run to Wat Rat Prakhong Tham. */
const HERITAGE_ROUTE = sliceLine(KHLONG_OM_NON, W1_PIER_INDEX, 53);

export const BOAT_TRIPS: BoatTrip[] = [
  {
    id: "sai-mu",
    title: 'Spiritual Blessing Tour: "Sai Mu"',
    subtitle: "3-Temples Blessing & Merit-Making Journey",
    badge: "Sacred Journey",
    badgeVariant: "special",
    routeLabel: "About This Journey",
    routeNote:
      'A specially curated spiritual journey visiting 3 sacred "Sai Mu" temples — sacred fortune and blessing sites — conveniently located close to the hotel. Ideal for making merit, seeking blessings, and experiencing authentic Thai spiritual traditions.',
    pricing: [],
    inclusions: ["Drinking Water", "Cold Towels", "Fish Food", "Hand Fans"],
    routeCoordinates: SAI_MU_ROUTE,
    landmarks: [
      W1_PIER,
      { id: "sai-mu-1", name: "Sai Mu Temple I", coordinates: KHLONG_OM_NON[70], kind: "temple", verified: false },
      { id: "sai-mu-2", name: "Sai Mu Temple II", nameTh: "วัดปรางค์หลวง", coordinates: KHLONG_OM_NON[68], kind: "temple", verified: true },
      { id: "sai-mu-3", name: "Sai Mu Temple III", nameTh: "วัดอัมพวัน", coordinates: KHLONG_OM_NON[67], kind: "temple", verified: true },
    ],
    cameraSettings: shot(SAI_MU_ROUTE, { zoom: 16.2, pitch: 60, bearing: -12 }),
  },
  {
    id: "wat-takien-floating-market",
    title: "Wat Takhian Floating Market Cruise",
    subtitle: "ทริปล่องเรือตลาดน้ำวัดตะเคียน เสาร์-อาทิตย์",
    badge: "Sat & Sun Only",
    badgeVariant: "special",
    scheduleLabel: "Boat Schedule",
    sessions: ["10:00 AM – 12:00 PM (Noon)"],
    routeLabel: "Route",
    routeNote:
      "Depart W1 → Arrive at Wat Takien: pay respects at the temple, enjoy local food, soak in the floating market atmosphere → Return to W1",
    pricing: [{ boat: "Genesis 3", capacityLabel: "up to 6 guests", priceThb: 1650 }],
    inclusions: ["Drinking Water", "Cold Towels", "Fish Food", "Hand Fans"],
    routeCoordinates: TAKIAN_ROUTE,
    landmarks: [
      W1_PIER,
      { id: "wat-takien", name: "Wat Takian Floating Market", nameTh: "วัดตะเคียน", coordinates: KHLONG_BANG_KHU_WIANG[17], kind: "market", verified: true },
    ],
    cameraSettings: shot(TAKIAN_ROUTE, { zoom: 15.6, pitch: 58, bearing: 40 }),
  },
  {
    id: "northern-riverways",
    title: "Northern Riverways Half-Day Temple Tour",
    subtitle: "สายน้ำเหนือ · Discover 3 historic temples",
    badge: "Half Day",
    badgeVariant: "default",
    scheduleLabel: "Boat Schedule",
    sessions: ["10:00 AM – 02:00 PM"],
    routeLabel: "Route — 3 Temples",
    routeNote: "Wat Ta-Nod · Wat Prang Luang · Wat Rat Prachong Tham",
    pricing: [
      { boat: "Genesis 3", capacityLabel: "up to 6 guests", priceThb: 3850 },
      { boat: "Genesis 1", capacityLabel: "up to 10 guests", priceThb: 6050 },
      { boat: "Genesis 2", capacityLabel: "up to 35 guests", priceThb: 13750 },
    ],
    inclusions: ["Drinking Water", "Cold Towels", "Fish Food", "Hand Fans", "Snack Box", "Mocktail"],
    routeCoordinates: NORTHERN_ROUTE,
    landmarks: [
      W1_PIER,
      { id: "wat-ta-nod", name: "Wat Ta-Nod", coordinates: KHLONG_OM_NON[70], kind: "temple", verified: false },
      { id: "wat-prang-luang", name: "Wat Prang Luang", nameTh: "วัดปรางค์หลวง", coordinates: KHLONG_OM_NON[68], kind: "temple", verified: true },
      { id: "wat-rat-prachong-tham", name: "Wat Rat Prachong Tham", nameTh: "วัดราษฎร์ประคองธรรม", coordinates: KHLONG_OM_NON[53], kind: "temple", verified: true },
    ],
    cameraSettings: shot(NORTHERN_ROUTE, { zoom: 15.0, pitch: 58, bearing: -8 }),
  },
  {
    id: "southern-riverways",
    title: "Southern Riverways Half-Day Temple Tour",
    subtitle: "สายน้ำใต้ · Explore 3 iconic temples",
    badge: "Half Day",
    badgeVariant: "default",
    scheduleLabel: "Boat Schedule",
    sessions: ["10:00 AM – 02:00 PM"],
    routeLabel: "Route — 3 Temples",
    routeNote: "Wat Chaiyaphruek · Wat Cha-lo · Wat Bang Oi Chang",
    pricing: [
      { boat: "Genesis 3", capacityLabel: "up to 6 guests", priceThb: 3850 },
      { boat: "Genesis 1", capacityLabel: "up to 10 guests", priceThb: 6050 },
      { boat: "Genesis 2", capacityLabel: "up to 35 guests", priceThb: 13750 },
    ],
    inclusions: ["Drinking Water", "Cold Towels", "Fish Food", "Hand Fans", "Snack Box", "Mocktail"],
    routeCoordinates: SOUTHERN_ROUTE,
    landmarks: [
      W1_PIER,
      { id: "wat-bang-oi-chang", name: "Wat Bang Oi Chang", nameTh: "วัดบางอ้อยช้าง", coordinates: KHLONG_OM_NON[113], kind: "temple", verified: true },
      { id: "wat-cha-lo", name: "Wat Chalo", nameTh: "วัดชลอ", coordinates: KHLONG_OM_NON[123], kind: "temple", verified: true },
      { id: "wat-chaiyaphruek", name: "Wat Chaiyaphruek", nameTh: "วัดชัยพฤกษมาลา", coordinates: KHLONG_BANGKOK_NOI_SOUTH[11], kind: "temple", verified: true },
    ],
    cameraSettings: shot(SOUTHERN_ROUTE, { zoom: 13.6, pitch: 52, bearing: 32 }),
  },
  {
    id: "heritage-wat-rat-prachong-tham",
    title: "Heritage: Wat Rat Prachong Tham",
    subtitle: "ทริปล่องเรือไหว้พระ 1 วัด · A dedicated peaceful morning visit",
    badge: "1 Hour",
    badgeVariant: "default",
    scheduleLabel: "Boat Schedule",
    sessions: ["10:00 – 11:00 AM"],
    routeLabel: "About This Journey",
    routeNote:
      "A dedicated, peaceful morning visit to the magnificent and highly revered Wat Rat Prachong Tham — one of the most sacred temples along the northern canal.",
    pricing: [],
    inclusions: ["Drinking Water", "Cold Towels", "Fish Food", "Hand Fans"],
    fullWidth: true,
    routeCoordinates: HERITAGE_ROUTE,
    landmarks: [
      W1_PIER,
      { id: "wat-rat-prachong-tham", name: "Wat Rat Prachong Tham", nameTh: "วัดราษฎร์ประคองธรรม", coordinates: KHLONG_OM_NON[53], kind: "temple", verified: true },
    ],
    cameraSettings: shot(HERITAGE_ROUTE, { zoom: 15.2, pitch: 62, bearing: -8 }),
  },
];

export function getBoatTripById(id: string): BoatTrip | undefined {
  return BOAT_TRIPS.find((t) => t.id === id);
}
