import * as faker from 'faker'

export function mockRedBall() {
  return faker.datatype.number({
    min: 1,
    max: 26
  })
}
