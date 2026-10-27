import { calculateSuccessRate, statusLabel } from './logic.js';

const rate = calculateSuccessRate(12, 12);
document.querySelector('#score').textContent = `${rate}%`;
document.querySelector('#status').textContent = statusLabel(rate);
document.querySelector('#year').textContent = new Date().getFullYear();
