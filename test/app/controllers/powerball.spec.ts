import PowerballController, { IErrorResponse }  from "@/controllers/powerball";
import { IPowerballService } from "@/services/powerball";
import { mockGameInfoOutput } from "../../__mock__/gameinfo-output";
import { mockPick } from "../../__mock__/pick";

describe('PowerballController ', () => {
  const date = '2021-10-18'
  const picks = [mockPick()]
  const service = {
    checkNumbers: jest.fn().mockResolvedValueOnce(mockPick()),
    getGameByDate: jest.fn().mockResolvedValueOnce(mockGameInfoOutput()),
  } as IPowerballService;
  const sut = new PowerballController(service)

  describe('getGameByDate', () => {
    it('should return the game', async () => {
      const result = await sut.getGameByDate(date);

      expect(result).toBeTruthy()
    });

    it('should return the error message if date not informed', async () => {
      const result = (await sut.getGameByDate('') as IErrorResponse);

      expect(result.hasError).toBe(true)
      expect(result.message).toBeTruthy()
    });

    it('should return the error message if game does not exists', async () => {
      jest.spyOn(service, 'getGameByDate').mockImplementationOnce((date) => {
        throw new Error('Mock error')
      })

      const result = (await sut.getGameByDate(date) as IErrorResponse);

      expect(result.hasError).toBe(true)
      expect(result.message).toBeTruthy()
    });
  });

  describe('checkNumbers', () => {
    it('should return the result', async () => {
      const result = await sut.checkNumbers(date, picks);

      expect(result).toBeTruthy()
    });

    it('should return the error message if date not informed', async () => {
      const result = (await sut.checkNumbers('', picks) as IErrorResponse);

      expect(result.hasError).toBe(true)
      expect(result.message).toBeTruthy()
    });

    it('should return the error message if picks not informed', async () => {
      const result = (await sut.checkNumbers(date, []) as IErrorResponse);

      expect(result.hasError).toBe(true)
      expect(result.message).toBeTruthy()
    });

    it('should return the error message if picks is malformed', async () => {
      const result = (await sut.checkNumbers(date, ['05 06 07 08']) as IErrorResponse);

      expect(result.hasError).toBe(true)
      expect(result.message).toBeTruthy()
    });

    it('should return the error message if game does not exists', async () => {
      jest.spyOn(service, 'checkNumbers').mockImplementationOnce((date) => {
        throw new Error('Mock error')
      })

      const result = (await sut.checkNumbers(date, picks) as IErrorResponse);

      expect(result.hasError).toBe(true)
      expect(result.message).toBeTruthy()
    });
  });
});
