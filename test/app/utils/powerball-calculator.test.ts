import { powerballCalculator } from "@/utils/powerball-calculator";

describe('powerballCalculator', () => {
  const wonPowerball = ' 15'
  const otherPowerball = ' 14'
  const wonPick = '23 29 47 59 60' + wonPowerball

  it('should return isGrandPrize true (5W + 1R)', () => {
    const pick = '23 29 47 59 60' + wonPowerball
    const supposedPrize = 0
    const { isGrandPrize, prize } = powerballCalculator(pick, wonPick)

    expect(isGrandPrize).toBe(true)
    expect(prize).toBe(supposedPrize)
  });

  it('should return isGrandPrize false and prize equals to 1_000_000 (5W + 0R)', () => {
    const pick = '23 29 47 59 60' + otherPowerball
    const supposedPrize = 1_000_000
    const { isGrandPrize, prize } = powerballCalculator(pick, wonPick)

    expect(isGrandPrize).toBe(false)
    expect(prize).toBe(supposedPrize)
  });

  it('should return isGrandPrize false and prize equals to 50_000 (4W + 1R)', () => {
    const pick = '23 29 47 59 61' + wonPowerball
    const supposedPrize = 50_000
    const { isGrandPrize, prize } = powerballCalculator(pick, wonPick)

    expect(isGrandPrize).toBe(false)
    expect(prize).toBe(supposedPrize)
  });

  it('should return isGrandPrize false and prize equals to 100 (4W + 0R)', () => {
    const pick = '23 29 47 59 61' + otherPowerball
    const supposedPrize = 100
    const { isGrandPrize, prize } = powerballCalculator(pick, wonPick)

    expect(isGrandPrize).toBe(false)
    expect(prize).toBe(supposedPrize)
  });

  it('should return isGrandPrize false and prize equals to 100 (3W + 1R)', () => {
    const pick = '23 29 47 58 61' + wonPowerball
    const supposedPrize = 100
    const { isGrandPrize, prize } = powerballCalculator(pick, wonPick)

    expect(isGrandPrize).toBe(false)
    expect(prize).toBe(supposedPrize)
  });

  it('should return isGrandPrize false and prize equals to 7 (3W + 0R)', () => {
    const pick = '23 29 47 58 61' + otherPowerball
    const supposedPrize = 7
    const { isGrandPrize, prize } = powerballCalculator(pick, wonPick)

    expect(isGrandPrize).toBe(false)
    expect(prize).toBe(supposedPrize)
  });

  it('should return isGrandPrize false and prize equals to 7 (2W + 1R)', () => {
    const pick = '23 29 46 58 61' + wonPowerball
    const supposedPrize = 7
    const { isGrandPrize, prize } = powerballCalculator(pick, wonPick)

    expect(isGrandPrize).toBe(false)
    expect(prize).toBe(supposedPrize)
  });

  it('should return isGrandPrize false and prize equals to 0 (2W + 0R)', () => {
    const pick = '23 29 46 58 61' + otherPowerball
    const supposedPrize = 0
    const { isGrandPrize, prize } = powerballCalculator(pick, wonPick)

    expect(isGrandPrize).toBe(false)
    expect(prize).toBe(supposedPrize)
  });

  it('should return isGrandPrize false and prize equals to 4 (1W + 1R)', () => {
    const pick = '23 28 46 58 61' + wonPowerball
    const supposedPrize = 4
    const { isGrandPrize, prize } = powerballCalculator(pick, wonPick)

    expect(isGrandPrize).toBe(false)
    expect(prize).toBe(supposedPrize)
  });

  it('should return isGrandPrize false and prize equals to 0 (1W + 0R)', () => {
    const pick = '23 28 46 58 61' + otherPowerball
    const supposedPrize = 0
    const { isGrandPrize, prize } = powerballCalculator(pick, wonPick)

    expect(isGrandPrize).toBe(false)
    expect(prize).toBe(supposedPrize)
  });

  it('should return isGrandPrize false and prize equals to 4 (0W + 1R)', () => {
    const pick = '22 28 46 58 61' + wonPowerball
    const supposedPrize = 4
    const { isGrandPrize, prize } = powerballCalculator(pick, wonPick)

    expect(isGrandPrize).toBe(false)
    expect(prize).toBe(supposedPrize)
  });

  it('should return isGrandPrize false and prize equals to 0 (0W + 0R)', () => {
    const pick = '22 28 46 58 61' + otherPowerball
    const supposedPrize = 0
    const { isGrandPrize, prize } = powerballCalculator(pick, wonPick)

    expect(isGrandPrize).toBe(false)
    expect(prize).toBe(supposedPrize)
  });
});
