import { formatLocation } from './utils';

describe('Utils tests', () => {
  it('should return city name if state & country are not present', () => {
    const expected = 'Tbilisi';
    const result = formatLocation('Tbilisi');
    expect(result).toEqual(expected);
  });
  it('should return city name and state if country is not present', () => {
    const expected = 'Tbilisi, Tbilisi';
    const result = formatLocation('Tbilisi', 'Tbilisi');
    expect(result).toEqual(expected);
  });
  it('should return city and country if state is not present', () => {
    const expected = 'Tbilisi, Georgia';
    const result = formatLocation('Tbilisi', undefined, 'GE');
    expect(result).toEqual(expected);
  });
  it('should return city if country is invalid and state is not present', () => {
    const expected = 'Tbilisi';
    const result = formatLocation('Tbilisi', undefined, 'GEO');
    expect(result).toEqual(expected);
  });
});
