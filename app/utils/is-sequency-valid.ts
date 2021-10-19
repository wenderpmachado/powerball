export function isSequencyValid(pick: string) {
  return /^([1-6][0-9]? ){5}([1][0-9]?|[2][0-6]?)$/.test(pick)
}
