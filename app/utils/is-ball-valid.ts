export function isBallValid(ball: string, isTheRed: boolean) {
  const regex = !isTheRed ? /^([1-6][0-9]?)$/ : /^([1][0-9]?|[2][0-6]?)$/

  return regex.test(ball)
}
