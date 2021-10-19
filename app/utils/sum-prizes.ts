import { IPrize } from "./powerball-calculator";

export function sumPrizes(prizes: IPrize[]) {
  return prizes.map(prize => prize.prize).reduce((prev, next) => (prev as number) + (next as number))
}
