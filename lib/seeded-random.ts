//Deterministic pseudo-random number generator based on seed (integer)
export function seededRandom(seed: number): number {
  //simple sine hash: returns value in range [0, 1]
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
