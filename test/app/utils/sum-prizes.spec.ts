import { IPrize } from "@/utils/powerball-calculator";
import { sumPrizes } from "@/utils/sum-prizes";
import { mockPrize } from "../../__mock__/prize";

describe('sumPrizes', () => {
  it('should sum and return a integer greatet than 1', () => {
    const prizes: IPrize[] = [
      mockPrize(4),
      mockPrize(7),
      mockPrize(100),
    ]
    const result = sumPrizes(prizes)

    expect(result).toBe(111)
  });

  it('should sum and return 0', () => {
    const prizes: IPrize[] = [
      mockPrize(0),
    ]
    const result = sumPrizes(prizes)

    expect(result).toBe(0)
  });
});
