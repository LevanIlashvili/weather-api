import * as countries from './countries.json';

export function formatLocation(
  city: string,
  state?: string,
  countryCode?: string,
) {
  let result = '';
  if (city) {
    result = `${result}${city}`;
  }
  if (state) {
    result = `${result}, ${state}`;
  }
  if (countryCode) {
    const country = countries.find(
      (c) => c['alpha-2'] === countryCode.toUpperCase(),
    );
    if (country) {
      result = `${result}, ${country.name}`;
    }
  }
  return result;
}
