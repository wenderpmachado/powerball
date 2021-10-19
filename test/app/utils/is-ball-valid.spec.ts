import { isBallValid } from "@/utils/is-ball-valid";

describe('isBallValid', () => {
  describe('should return true', () => {
    it('if white ball and number 1', () => {
      const redBall = false
      const number = '1'
      const result = isBallValid(number, redBall)

      expect(result).toBe(true)
    });

    it('if white ball and number 69', () => {
      const redBall = false
      const number = '69'
      const result = isBallValid(number, redBall)

      expect(result).toBe(true)
    });

    it('if red ball and number 1', () => {
      const redBall = true
      const number = '1'
      const result = isBallValid(number, redBall)

      expect(result).toBe(true)
    });

    it('if red ball and number 26', () => {
      const redBall = true
      const number = '26'
      const result = isBallValid(number, redBall)

      expect(result).toBe(true)
    });
  });

  describe('should return false', () => {
    it('if white ball and number 0', () => {
      const redBall = false
      const number = '0'
      const result = isBallValid(number, redBall)

      expect(result).toBe(false)
    });

    it('if white ball and number 70', () => {
      const redBall = false
      const number = '70'
      const result = isBallValid(number, redBall)

      expect(result).toBe(false)
    });

    it('if red ball and number 0', () => {
      const redBall = true
      const number = '0'
      const result = isBallValid(number, redBall)

      expect(result).toBe(false)
    });

    it('if red ball and number 27', () => {
      const redBall = true
      const number = '27'
      const result = isBallValid(number, redBall)

      expect(result).toBe(false)
    });
  });
});
