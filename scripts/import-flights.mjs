// Converts a Flightradar24 "My Flights" CSV export into src/data/flights.json.
// Only public-safe columns are kept (no seat numbers, notes, or registrations).
//
//   node scripts/import-flights.mjs path/to/flightdiary.csv

import { readFileSync, writeFileSync } from "node:fs";

const [, , input] = process.argv;
if (!input) {
  console.error("usage: node scripts/import-flights.mjs <flightdiary.csv>");
  process.exit(1);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') field += '"', i++;
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") row.push(field), (field = "");
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field), rows.push(row), (row = []), (field = "");
    } else field += c;
  }
  if (field || row.length) row.push(field), rows.push(row);
  return rows.filter((r) => r.some((f) => f.trim()));
}

const [header, ...records] = parseCsv(readFileSync(input, "utf8").replace(/^﻿/, ""));
const col = (name) => header.indexOf(name);
const iata = (s) => s.match(/\((\w{3})\//)?.[1] ?? "";
const code = (s) => s.match(/\((\w{2,4})\)/)?.[1] ?? "";

const flights = records
  .map((r) => ({
    date: r[col("Date")],
    flight: r[col("Flight number")],
    from: iata(r[col("From")]),
    to: iata(r[col("To")]),
    airline: r[col("Airline")].replace(/\s*\(.*\)$/, ""),
    aircraft: code(r[col("Aircraft")]),
  }))
  .sort((a, b) => a.date.localeCompare(b.date));

const airports = JSON.parse(readFileSync(new URL("../src/data/airports.json", import.meta.url), "utf8"));
const missing = [...new Set(flights.flatMap((f) => [f.from, f.to]))].filter((c) => !airports[c]);
if (missing.length) {
  console.warn(`Add coordinates to src/data/airports.json for: ${missing.join(", ")}`);
}

writeFileSync(new URL("../src/data/flights.json", import.meta.url), JSON.stringify(flights, null, 2) + "\n");
console.log(`Wrote ${flights.length} flights.`);
