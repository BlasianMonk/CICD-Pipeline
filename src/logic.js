export function calculateSuccessRate(passed, total) {
  if (!Number.isInteger(passed) || !Number.isInteger(total) || total <= 0 || passed < 0 || passed > total) {
    throw new RangeError('Expected integer counts with 0 <= passed <= total and total > 0');
  }
  return Math.round((passed / total) * 100);
}

export function statusLabel(rate) {
  if (!Number.isFinite(rate) || rate < 0 || rate > 100) throw new RangeError('Invalid percentage');
  return rate === 100 ? 'All checks passing' : rate >= 80 ? 'Mostly passing' : 'Needs attention';
}
