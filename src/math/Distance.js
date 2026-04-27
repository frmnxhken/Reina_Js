export function euclidean(x, y) {
  let distance = 0;
  for (let i = 0; i < x.length; i++) {
    distance += Math.pow(x[i] - y[i], 2);
  }
  return Math.sqrt(distance);
}
