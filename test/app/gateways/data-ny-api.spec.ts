import * as faker from 'faker'
import { DataNyAPI, IHttpGetClient } from "@/gateways";
import { LoadGameInfo } from '@/gateways/contracts';
import { mockPick } from '../../__mock__/pick';
import { mockGameInfoOutput } from '../../__mock__/gameinfo-output';
import { mockDataNyAPI } from '../../__mock__/data-ny-api';

describe('DataNyAPI', () => {
  const httpClient: IHttpGetClient = {
    get: jest.fn()
  };
  const sut = mockDataNyAPI(httpClient)

  describe('loadResult', () => {
    it('should return the game result', async () => {
      jest.spyOn(httpClient, 'get').mockResolvedValueOnce([
        mockGameInfoOutput()
      ] as LoadGameInfo.Output[])

      const date = '2021-10-18'
      const result = await sut.loadResult({ date });

      expect(result).toBeTruthy();
      expect(result?.draw_date).toBeTruthy()
      expect(result?.multiplier).toBeTruthy()
      expect(result?.winning_numbers).toBeTruthy()
    });

    it('should not return the game result if not exists', async () => {
      jest.spyOn(httpClient, 'get').mockResolvedValueOnce([] as LoadGameInfo.Output[])

      const date = '2021-10-18'
      const result = await sut.loadResult({ date });

      expect(result).toBeUndefined();
    });
  });
});
