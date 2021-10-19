import * as faker from 'faker'

export function mockWhiteBall() {
  return faker.datatype.number({
    min: 1,
    max: 69
  })
}
