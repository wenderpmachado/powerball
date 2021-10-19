import { mockRedBall } from './red-ball'
import { mockWhiteBall } from './white-ball'

export function mockPick() {
  return [
    mockWhiteBall(),
    mockWhiteBall(),
    mockWhiteBall(),
    mockWhiteBall(),
    mockWhiteBall(),
    mockRedBall(),
  ].join(' ')
}
