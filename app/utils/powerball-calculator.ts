import { compareTwoArrays } from "./compare-two-arrays";
import { extractBalls } from "./extract-balls";

export interface IPrize {
  pick: string;
  isGrandPrize: boolean;
  prize: string | number;
}

export function powerballCalculator(pick: string, wonPick: string): IPrize {
  const balls = extractBalls(pick)
  const wonBalls = extractBalls(wonPick)

  const totalWhiteBalls = compareTwoArrays(balls.whiteBalls, wonBalls.whiteBalls);
  const samePowerball = balls.powerball === wonBalls.powerball;

  let prize = 0;
  let isGrandPrize = false;

  switch (totalWhiteBalls) {
    case 2:
      prize = samePowerball ? 7 : 0;
      break;
    case 3:
      prize = samePowerball ? 100 : 7;
      break;
    case 4:
      prize = samePowerball ? 50_000 : 100;
      break;
    case 5:
      if (samePowerball) {
        isGrandPrize = true;
      } else {
        prize = 1_000_000;
      }
      break;
    case 0:
    case 1:
    default:
      prize = samePowerball ? 4 : 0;
      break;
  }

  return {
    pick,
    isGrandPrize,
    prize
  }
}
