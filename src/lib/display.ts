import { formatNumber, truncateMiddle } from '@/lib/format';

export const DEFAULT_COMPACT_LABEL_LENGTH = 16;

/**
 * Format a compact label combining a truncated identifier and a formatted count.
 * Used where labels need to fit in tight horizontal spaces (e.g. list rows,
 * chart tooltips) without losing the head/tail signal of the identifier.
 */
export function formatCompactLabel(
  id: string,
  value: number,
  maxIdLength: number = DEFAULT_COMPACT_LABEL_LENGTH,
): string {
  return `${truncateMiddle(id, maxIdLength)} (${formatNumber(value)})`;
}
