/**
 * Canal centerlines used by the /test-minimap boat map.
 *
 * Source: OpenStreetMap waterway geometry (ODbL), not a straight-line
 * guess between temples. Every vertex sits on water:
 *   - Khlong Om Non (relation 21227996) — the upstream continuation of
 *     Khlong Bangkok Noi at W1@Bangkoknoi in Bang Yai, Nonthaburi
 *   - Khlong Bang Khu Wiang (way 881656554) — branch to Wat Takian
 *   - Khlong Bangkok Noi (ways 152017875 + 830801817) — downstream
 *     toward Wat Chaiyaphruek / Khlong Maha Sawat
 *
 * Index 72 of `KHLONG_OM_NON` is the canal vertex at the W1 jetty
 * (91 m west of the hotel building pin). Do not "simplify" these
 * polylines down to 4–5 points — that's what made the gold line cut
 * across Rotfai Rd / Arun Ammarin Rd in the first pass.
 */

export type LngLat = [number, number];

/** W1 jetty snapped onto the canal, not the hotel building. */
export const W1_PIER_ON_CANAL: LngLat = [100.4254737, 13.8366376];
export const W1_PIER_INDEX = 72;

/**
 * Khlong Om Non, OSM member order: north-east → W1 pier (idx 72) →
 * south-east toward Wat Bang Oi Chang / Wat Chalo.
 */
export const KHLONG_OM_NON: LngLat[] = [
  [100.4794807, 13.8547143],
  [100.4777751, 13.8536941],
  [100.4767123, 13.852621],
  [100.475697, 13.8516838],
  [100.4745441, 13.850693],
  [100.472612, 13.849536],
  [100.4706823, 13.8486465],
  [100.4687907, 13.848357],
  [100.4677495, 13.8483916],
  [100.4661117, 13.8484461],
  [100.4655525, 13.8485463],
  [100.4642825, 13.8487737],
  [100.4623045, 13.8493927],
  [100.460117, 13.8502232],
  [100.4575716, 13.8513355],
  [100.4556428, 13.8523854],
  [100.4545317, 13.8530829],
  [100.4532509, 13.8541186],
  [100.4525014, 13.8548827],
  [100.4509914, 13.8571905],
  [100.4492385, 13.8610699],
  [100.4484239, 13.8636034],
  [100.4483102, 13.8645214],
  [100.4481423, 13.8658773],
  [100.4479336, 13.8674402],
  [100.4477432, 13.8679806],
  [100.4473194, 13.868931],
  [100.4467516, 13.869683],
  [100.445864, 13.8705986],
  [100.4446831, 13.8712285],
  [100.4422841, 13.8718904],
  [100.44133, 13.8719688],
  [100.439758, 13.8719532],
  [100.4379354, 13.8714991],
  [100.4354024, 13.8705528],
  [100.4334103, 13.8694278],
  [100.4322089, 13.8684384],
  [100.4320453, 13.8683037],
  [100.4315793, 13.8677875],
  [100.430756, 13.8668754],
  [100.4301292, 13.8657388],
  [100.4298834, 13.8652932],
  [100.4286881, 13.863016],
  [100.428355, 13.8625323],
  [100.4273192, 13.8610022],
  [100.427082, 13.8606018],
  [100.4266653, 13.8598985],
  [100.426065, 13.8585513],
  [100.4254854, 13.8572503],
  [100.4251071, 13.8564014],
  [100.4250614, 13.8562948],
  [100.4247339, 13.8555301],
  [100.4246491, 13.8552465],
  [100.4243608, 13.85421],
  [100.4242931, 13.8534277],
  [100.4243061, 13.8524066],
  [100.4243216, 13.8522112],
  [100.4243795, 13.8519766],
  [100.424382, 13.8516672],
  [100.4243088, 13.8511118],
  [100.4238867, 13.8494318],
  [100.4238492, 13.8492727],
  [100.4235198, 13.8478726],
  [100.4232772, 13.8468417],
  [100.4231468, 13.8459242],
  [100.4230446, 13.8447413],
  [100.4231811, 13.8435624],
  [100.4232109, 13.8433683],
  [100.4236454, 13.8405442],
  [100.4239238, 13.8393931],
  [100.4243873, 13.8383894],
  [100.4249745, 13.8373325],
  [100.4254737, 13.8366376],
  [100.4261914, 13.8357327],
  [100.4269947, 13.8345599],
  [100.4272105, 13.8343094],
  [100.4274295, 13.8340552],
  [100.4282425, 13.8332629],
  [100.429034, 13.8327467],
  [100.4301289, 13.8322427],
  [100.4303601, 13.8321363],
  [100.4316019, 13.8315646],
  [100.4355957, 13.8293052],
  [100.4388978, 13.8281369],
  [100.4401342, 13.8278566],
  [100.4415411, 13.8278579],
  [100.4428102, 13.8281239],
  [100.443407, 13.828249],
  [100.4434959, 13.8282676],
  [100.4450869, 13.8289236],
  [100.4456935, 13.8291737],
  [100.4471719, 13.8297834],
  [100.4503476, 13.8303918],
  [100.4535183, 13.8308314],
  [100.4547135, 13.8309971],
  [100.4561484, 13.8310192],
  [100.457871, 13.8305879],
  [100.4592191, 13.8300283],
  [100.4595519, 13.8298248],
  [100.4599761, 13.8295389],
  [100.4616027, 13.8284425],
  [100.4625527, 13.8278022],
  [100.463726, 13.8270266],
  [100.464724, 13.8263668],
  [100.4658787, 13.8254354],
  [100.4659441, 13.8253827],
  [100.46631, 13.8251011],
  [100.4676115, 13.8236393],
  [100.4677348, 13.8235009],
  [100.4689596, 13.8214256],
  [100.4690137, 13.8213339],
  [100.4693226, 13.8206788],
  [100.4700411, 13.8191552],
  [100.4702931, 13.8185532],
  [100.4711187, 13.8165809],
  [100.47142, 13.8160227],
  [100.4721383, 13.8146918],
  [100.4728675, 13.8133409],
  [100.4729189, 13.8132638],
  [100.473363, 13.8125975],
  [100.4739209, 13.8117607],
  [100.4751942, 13.8098506],
  [100.4761569, 13.8084218],
  [100.4765507, 13.8077039],
];

/** Branch off Om Non at idx 79 — the waterway to Wat Takian floating market. */
export const KHLONG_BANG_KHU_WIANG: LngLat[] = [
  [100.4301289, 13.8322427],
  [100.42963, 13.8318973],
  [100.4293462, 13.8315824],
  [100.4291853, 13.8312959],
  [100.4290727, 13.8309573],
  [100.428584, 13.8304544],
  [100.4281393, 13.8302073],
  [100.4277417, 13.8300794],
  [100.4273555, 13.8300013],
  [100.4270551, 13.8299804],
  [100.4267606, 13.8298583],
  [100.4265669, 13.8296887],
  [100.4260359, 13.8289855],
  [100.4257521, 13.8286706],
  [100.4252902, 13.8284282],
  [100.4245177, 13.8281729],
  [100.4237023, 13.8279281],
  [100.4232898, 13.8276705],
  [100.4225758, 13.8270895],
  [100.4221467, 13.8266727],
  [100.4216698, 13.8262954],
  [100.4212025, 13.8260685],
  [100.4207095, 13.8259203],
  [100.4201999, 13.8257328],
  [100.4197112, 13.8254122],
  [100.4195559, 13.825276],
];

/** Downstream Khlong Bangkok Noi from the Om Non / Bang Kruai junction. */
export const KHLONG_BANGKOK_NOI_SOUTH: LngLat[] = [
  [100.4765507, 13.8077039],
  [100.4741245, 13.804957],
  [100.473339, 13.8038588],
  [100.4732071, 13.8036514],
  [100.4729003, 13.8030888],
  [100.4724944, 13.8020332],
  [100.4720148, 13.8006425],
  [100.4719039, 13.800321],
  [100.471297, 13.798561],
  [100.4706277, 13.7969213],
  [100.4697246, 13.7947587],
  [100.4693888, 13.7940783],
  [100.468568, 13.7931236],
  [100.4680185, 13.7922646],
  [100.467858, 13.7920137],
  [100.4677789, 13.7918922],
  [100.4671413, 13.7909124],
  [100.4666193, 13.7898976],
  [100.4664194, 13.7894151],
  [100.4662169, 13.7889263],
];

export function sliceLine(line: LngLat[], from: number, to: number): LngLat[] {
  if (from <= to) return line.slice(from, to + 1);
  return line.slice(to, from + 1).reverse();
}

export function joinLines(...parts: LngLat[][]): LngLat[] {
  const out: LngLat[] = [];
  for (const part of parts) {
    for (const pt of part) {
      const prev = out[out.length - 1];
      if (prev && prev[0] === pt[0] && prev[1] === pt[1]) continue;
      out.push(pt);
    }
  }
  return out;
}

export function boundsCenter(coords: LngLat[]): LngLat {
  let minLng = coords[0][0];
  let maxLng = coords[0][0];
  let minLat = coords[0][1];
  let maxLat = coords[0][1];
  for (const [lng, lat] of coords) {
    minLng = Math.min(minLng, lng);
    maxLng = Math.max(maxLng, lng);
    minLat = Math.min(minLat, lat);
    maxLat = Math.max(maxLat, lat);
  }
  return [(minLng + maxLng) / 2, (minLat + maxLat) / 2];
}

/** Mapbox bearing: 0 = north up, clockwise. Matches geographic heading. */
export function headingDegrees(from: LngLat, to: LngLat): number {
  const dLng = to[0] - from[0];
  const dLat = to[1] - from[1];
  if (dLng === 0 && dLat === 0) return 0;
  return (Math.atan2(dLng, dLat) * 180) / Math.PI;
}

export function pointAlong(coords: LngLat[], t: number): LngLat {
  if (coords.length === 0) return [0, 0];
  if (coords.length === 1) return coords[0];
  const clamped = Math.min(1, Math.max(0, t));
  const f = clamped * (coords.length - 1);
  const i0 = Math.floor(f);
  const i1 = Math.min(coords.length - 1, i0 + 1);
  const u = f - i0;
  return [
    coords[i0][0] + (coords[i1][0] - coords[i0][0]) * u,
    coords[i0][1] + (coords[i1][1] - coords[i0][1]) * u,
  ];
}

function routeSpan(coords: LngLat[]): number {
  let minLng = coords[0][0];
  let maxLng = coords[0][0];
  let minLat = coords[0][1];
  let maxLat = coords[0][1];
  for (const [lng, lat] of coords) {
    minLng = Math.min(minLng, lng);
    maxLng = Math.max(maxLng, lng);
    minLat = Math.min(minLat, lat);
    maxLat = Math.max(maxLat, lat);
  }
  return Math.max(maxLng - minLng, maxLat - minLat);
}

function zoomForSpan(span: number): number {
  if (span < 0.0035) return 16.5;
  if (span < 0.008) return 15.7;
  if (span < 0.018) return 14.8;
  if (span < 0.035) return 13.9;
  return 13.2;
}

/**
 * Cinematic establishing shot: camera sits just behind the start of the
 * route and looks along it (Japan-shipping-map style), so the canal recedes
 * into the distance instead of a north-up overview.
 */
export function cinematicCamera(coords: LngLat[]): {
  center: LngLat;
  bearing: number;
  pitch: number;
  zoom: number;
} {
  const lookAt = pointAlong(coords, Math.min(0.55, Math.max(0.35, coords.length > 20 ? 0.4 : 0.5)));
  return {
    center: pointAlong(coords, 0.22),
    bearing: headingDegrees(coords[0], lookAt),
    pitch: 62,
    zoom: zoomForSpan(routeSpan(coords)),
  };
}

/** Heading of the canal as it arrives at a landmark (for click-to-zoom). */
export function headingNear(coords: LngLat[], target: LngLat): number {
  let best = 0;
  let bestD = Infinity;
  for (let i = 0; i < coords.length; i++) {
    const dLng = coords[i][0] - target[0];
    const dLat = coords[i][1] - target[1];
    const d = dLng * dLng + dLat * dLat;
    if (d < bestD) {
      bestD = d;
      best = i;
    }
  }
  const from = coords[Math.max(0, best - 2)];
  const to = coords[Math.min(coords.length - 1, best + 2)];
  return headingDegrees(from, to);
}
