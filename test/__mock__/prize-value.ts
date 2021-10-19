import { GRAND_PRIZE } from '@/constants'
import * as faker from 'faker'

export function mockPrizeValue() {
  return faker.random.arrayElement([
    GRAND_PRIZE,
    faker.datatype.number({
      min: 0,
      max: 1_000_000
    })
  ])
}
