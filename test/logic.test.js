import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSuccessRate, statusLabel } from '../src/logic.js';

test('calculates percentages', () => {
  assert.equal(calculateSuccessRate(12, 12), 100);
  assert.equal(calculateSuccessRate(4, 5), 80);
  assert.equal(calculateSuccessRate(0, 3), 0);
});

test('rejects invalid counts', () => {
  assert.throws(() => calculateSuccessRate(2, 0), RangeError);
  assert.throws(() => calculateSuccessRate(3, 2), RangeError);
});

test('classifies status', () => {
  assert.equal(statusLabel(100), 'All checks passing');
  assert.equal(statusLabel(90), 'Mostly passing');
  assert.equal(statusLabel(20), 'Needs attention');
  assert.throws(() => statusLabel(101), RangeError);
});
