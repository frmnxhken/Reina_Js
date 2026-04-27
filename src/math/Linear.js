export function dot(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

export function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}
