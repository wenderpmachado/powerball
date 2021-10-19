export function compareTwoArrays(array1: any[], array2: any[]): number {
  return array1.reduce((a, c) => a + array2.includes(c), 0)
}
