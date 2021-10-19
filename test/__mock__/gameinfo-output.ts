import * as faker from 'faker'
import { LoadGameInfo } from "@/gateways/contracts";
import { mockPick } from './pick';

export function mockGameInfoOutput(): LoadGameInfo.Output {
  return {
    draw_date: faker.date.recent().toString(),
    multiplier: faker.datatype.number(30).toString(),
    winning_numbers: mockPick()
  }
}
