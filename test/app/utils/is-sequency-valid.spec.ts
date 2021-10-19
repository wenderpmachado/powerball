import { isSequencyValid } from "@/utils/is-sequency-valid";

describe('isSequencyValid', () => {
  describe('should be valid', () => {
    it('if pass correct sequenct', () => {
      const pick = '23 29 47 59 60 14'
      const result = isSequencyValid(pick)

      expect(result).toBe(true)
    });
  });

  describe('should be invalid', () => {
    it('if miss one number (powerball)', () => {
      const pick = '23 29 47 59 60'
      const result = isSequencyValid(pick)

      expect(result).toBe(false)
    });

    it('if powerball is greater than 26', () => {
      const pick = '23 29 47 59 60 27'
      const result = isSequencyValid(pick)

      expect(result).toBe(false)
    });

    it('if powerball is lower than 1', () => {
      const pick = '23 29 47 59 60 0'
      const result = isSequencyValid(pick)

      expect(result).toBe(false)
    });

    it('if any white ball is greater than 69', () => {
      const pick = '23 29 47 59 70 16'
      const result = isSequencyValid(pick)

      expect(result).toBe(false)
    });

    it('if any white ball is lower than 1', () => {
      const pick = '0 29 47 59 69 16'
      const result = isSequencyValid(pick)

      expect(result).toBe(false)
    });
  });
});
