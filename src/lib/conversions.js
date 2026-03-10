/**
 * Capacity Conversion Utility
 * All conversions pivot through milliliters (mL)
 * High precision factors used wherever possible
 */

export const units = [
  { id: 'ml', name: 'Milliliter', symbol: 'mL' },
  { id: 'l', name: 'Liter', symbol: 'L' },
  { id: 'cl', name: 'Centiliter', symbol: 'cL' },
  { id: 'dl', name: 'Deciliter', symbol: 'dL' },
  { id: 'kl', name: 'Kiloliter', symbol: 'kL' },
  { id: 'm3', name: 'Cubic Meter', symbol: 'm³' },

  { id: 'tsp_us', name: 'US Teaspoon', symbol: 'tsp' },
  { id: 'tbsp_us', name: 'US Tablespoon', symbol: 'tbsp' },
  { id: 'floz_us', name: 'US Fluid Ounce', symbol: 'fl oz' },
  { id: 'cup_us', name: 'US Cup', symbol: 'cup' },
  { id: 'pint_us', name: 'US Pint', symbol: 'pt' },
  { id: 'quart_us', name: 'US Quart', symbol: 'qt' },
  { id: 'gallon_us', name: 'US Gallon', symbol: 'gal' },

  { id: 'tsp_imp', name: 'Imperial Teaspoon', symbol: 'tsp (imp)' },
  { id: 'tbsp_imp', name: 'Imperial Tablespoon', symbol: 'tbsp (imp)' },
  { id: 'floz_imp', name: 'Imperial Fluid Ounce', symbol: 'fl oz (imp)' },
  { id: 'cup_imp', name: 'Imperial Cup', symbol: 'cup (imp)' },
  { id: 'pint_imp', name: 'Imperial Pint', symbol: 'pt (imp)' },
  { id: 'quart_imp', name: 'Imperial Quart', symbol: 'qt (imp)' },
  { id: 'gallon_imp', name: 'Imperial Gallon', symbol: 'gal (imp)' },

  { id: 'barrel_oil', name: 'Oil Barrel', symbol: 'bbl' },
  { id: 'barrel_us', name: 'US Barrel (liquid)', symbol: 'bbl (US)' },
  { id: 'barrel_beer', name: 'Beer Barrel', symbol: 'bbl (beer)' },

  { id: 'dram_us', name: 'US Fluid Dram', symbol: 'fl dr' },
  { id: 'shot', name: 'Shot', symbol: 'shot' },

  { id: 'drop', name: 'Drop', symbol: 'gtt' },
  { id: 'dash', name: 'Dash', symbol: 'dash' },
  { id: 'pinch', name: 'Pinch', symbol: 'pinch' },
  { id: 'smidgen', name: 'Smidgen', symbol: 'smidgen' }
];

/**
 * Conversion factors TO milliliters
 */

const toMilliliterMap = {
  ml: v => v,
  l: v => v * 1000,
  cl: v => v * 10,
  dl: v => v * 100,
  kl: v => v * 1000000,
  m3: v => v * 1000000,

  tsp_us: v => v * 4.92892159375,
  tbsp_us: v => v * 14.78676478125,
  floz_us: v => v * 29.5735295625,
  cup_us: v => v * 236.5882365,
  pint_us: v => v * 473.176473,
  quart_us: v => v * 946.352946,
  gallon_us: v => v * 3785.411784,

  tsp_imp: v => v * 5.919388020833333,
  tbsp_imp: v => v * 17.7581640625,
  floz_imp: v => v * 28.4130625,
  cup_imp: v => v * 284.130625,
  pint_imp: v => v * 568.26125,
  quart_imp: v => v * 1136.5225,
  gallon_imp: v => v * 4546.09,

  barrel_oil: v => v * 158987.294928,
  barrel_us: v => v * 119240.471196,
  barrel_beer: v => v * 117347.7658,

  dram_us: v => v * 3.6966911953125,
  shot: v => v * 44.3602943,

  drop: v => v * 0.05,
  dash: v => v * 0.6161152,
  pinch: v => v * 0.3080576,
  smidgen: v => v * 0.1540288
};

/**
 * Conversion FROM milliliters
 */

const fromMilliliterMap = {
  ml: v => v,
  l: v => v / 1000,
  cl: v => v / 10,
  dl: v => v / 100,
  kl: v => v / 1000000,
  m3: v => v / 1000000,

  tsp_us: v => v / 4.92892159375,
  tbsp_us: v => v / 14.78676478125,
  floz_us: v => v / 29.5735295625,
  cup_us: v => v / 236.5882365,
  pint_us: v => v / 473.176473,
  quart_us: v => v / 946.352946,
  gallon_us: v => v / 3785.411784,

  tsp_imp: v => v / 5.919388020833333,
  tbsp_imp: v => v / 17.7581640625,
  floz_imp: v => v / 28.4130625,
  cup_imp: v => v / 284.130625,
  pint_imp: v => v / 568.26125,
  quart_imp: v => v / 1136.5225,
  gallon_imp: v => v / 4546.09,

  barrel_oil: v => v / 158987.294928,
  barrel_us: v => v / 119240.471196,
  barrel_beer: v => v / 117347.7658,

  dram_us: v => v / 3.6966911953125,
  shot: v => v / 44.3602943,

  drop: v => v / 0.05,
  dash: v => v / 0.6161152,
  pinch: v => v / 0.3080576,
  smidgen: v => v / 0.1540288
};

function isValidNumber(n) {
  return typeof n === 'number' && !Number.isNaN(n);
}

export function toMilliliters(value, fromUnitId) {
  if (!isValidNumber(value)) return null;
  const fn = toMilliliterMap[fromUnitId];
  return fn ? fn(value) : null;
}

export function fromMilliliters(ml, toUnitId) {
  if (!isValidNumber(ml)) return null;
  const fn = fromMilliliterMap[toUnitId];
  return fn ? fn(ml) : null;
}

export function convert(value, fromUnitId, toUnitId) {
  const ml = toMilliliters(value, fromUnitId);
  if (ml === null) return null;
  return fromMilliliters(ml, toUnitId);
}

export function formatCapacity(num) {
  if (!isValidNumber(num)) return '—';

  const fixed = num.toFixed(6);
  return fixed.replace(/\.?0+$/, '');
}