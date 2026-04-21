jest.mock('../format', () => ({
  formatNumber: (n: number | string) => String(n),
  truncateMiddle: (text: string, maxLength: number) => {
    const chars = Array.from(text);
    if (chars.length <= maxLength) return text;
    const keep = Math.max(1, Math.floor((maxLength - 3) / 2));
    return `${chars.slice(0, keep).join('')}...${chars.slice(-keep).join('')}`;
  },
}));

import { formatCompactLabel } from '../display';

test('formatCompactLabel combines a truncated id with a formatted value', () => {
  expect(formatCompactLabel('abc-1234567890-xyz', 1500, 10)).toBe('abc...xyz (1500)');
});

test('formatCompactLabel leaves short ids untouched', () => {
  expect(formatCompactLabel('short', 42, 16)).toBe('short (42)');
});
