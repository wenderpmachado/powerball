export function extractBalls(pick: string) {
  const balls = pick.split(' ')
  const powerball = balls.pop()

  return {
    whiteBalls: balls,
    powerball
  }
}
