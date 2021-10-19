import { IHttpGetClient } from "@/gateways";
import { LoadGameInfo } from "@/gateways/contracts";
import PowerballService from "@/services/powerball";
import { mockDataNyAPI } from "../../__mock__/data-ny-api";
import { mockGameInfoOutput } from "../../__mock__/gameinfo-output";
import { mockPick } from "../../__mock__/pick";

describe('PowerballService', () => {
  const date = '2021-10-18'
  const httpClient: IHttpGetClient = {
    get: jest.fn()
  };
  const dataNyAPI = mockDataNyAPI(httpClient)
  const sut = new PowerballService(dataNyAPI)

  describe('getGameByDate', () => {
    it('should return the game by date', async () => {
      jest.spyOn(httpClient, 'get').mockResolvedValueOnce([
        mockGameInfoOutput()
      ] as LoadGameInfo.Output[])

      const result = await sut.getGameByDate(date)

      expect(result).toBeTruthy()
      expect(result?.draw_date).toBeTruthy()
      expect(result?.multiplier).toBeTruthy()
      expect(result?.winning_numbers).toBeTruthy()
    });

    it('should throw an error if the game does not exists', async () => {
      jest.spyOn(httpClient, 'get').mockResolvedValueOnce([] as LoadGameInfo.Output[])

      const call = sut.getGameByDate(date)

      await expect(call).rejects.toThrow(Error);
    });
  });

  describe('checkNumbers', () => {
    it('should return the result of a pick', async () => {
      jest.spyOn(sut, 'getGameByDate').mockResolvedValueOnce(
        mockGameInfoOutput()
      )

      const picks = [mockPick()]

      const result = await sut.checkNumbers(date, picks)

      expect(result).toBeTruthy()
      expect(result.prizes).toBeTruthy()
      expect(result.totalPrize).toBeGreaterThanOrEqual(0)
    });

    it('should throw an error if the game does not exists', async () => {
      jest.spyOn(sut, 'getGameByDate').mockResolvedValueOnce(undefined)

      const picks = [mockPick()]

      const call = sut.checkNumbers(date, picks)

      await expect(call).rejects.toThrow(Error);
    });
  });
});
