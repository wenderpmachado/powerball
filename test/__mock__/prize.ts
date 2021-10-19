import * as faker from 'faker';
import { IPrize } from "@/utils/powerball-calculator";
import { mockPick } from "./pick";
import { mockPrizeValue } from "./prize-value";

export function mockPrize(prize: number = mockPrizeValue() as number): IPrize {
  const isGrandPrize = faker.datatype.boolean()

  return {
    pick: mockPick(),
    isGrandPrize,
    prize
  }
}
