import airports from "./airports.json";
import flights from "./flights.json";

export type Flight = (typeof flights)[number];

const MOON_KM = 384_400;

type Airport = { city: string; lat: number; lon: number };
const lookup = airports as Record<string, Airport>;

function greatCircleKm(a: Airport, b: Airport) {
  const rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad;
  const dLon = (b.lon - a.lon) * rad;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

const km = flights.reduce((sum, f) => {
  const from = lookup[f.from];
  const to = lookup[f.to];
  return from && to ? sum + greatCircleKm(from, to) : sum;
}, 0);

export const flightStats = {
  flights: flights.length,
  airports: new Set(flights.flatMap((f) => [f.from, f.to])).size,
  km: Math.round(km),
  moons: km / MOON_KM,
};

// "fly me to the moon": how far along (or past) the way there.
export const moonLine =
  km >= MOON_KM
    ? `far enough to reach the moon, with ${Math.round(km - MOON_KM).toLocaleString("en-US")} km to spare`
    : `${Math.round((km / MOON_KM) * 100)}% of the way to the moon`;

export { flights };
