import { DataNyAPI } from '@/gateways';
import { LoadGameInfo } from '@/gateways/contracts';
import { makeDataNyAPI } from '@/gateways/factories/data-ny-api'
import { IPrize, powerballCalculator } from '@/utils/powerball-calculator';
import { sumPrizes } from '@/utils/sum-prizes';

export interface IPickResults {
  prizes: IPrize[];
  totalPrize: string | number;
}

export interface IPowerballService {
  getGameByDate(date: string): Promise<LoadGameInfo.Output>;
  checkNumbers(date: string, numbers: string[]): Promise<IPickResults>;
}

class PowerballService implements IPowerballService {
  // TODO: Add dependency injection
  constructor(private readonly dataNyAPI: DataNyAPI = makeDataNyAPI()) {}

  async getGameByDate(date: string) {
    const result = await this.dataNyAPI.loadResult({ date });

    if (!result) {
      throw new Error('No game in this date')
    }

    return result;
  }

  async checkNumbers(date: string, picks: string[]): Promise<IPickResults> {
    const result = await this.getGameByDate(date);

    if (!result) {
      throw new Error('Game not found');
    }

    const { winning_numbers: wonPick } = result;

    const prizes = picks.map(pick => powerballCalculator(pick, wonPick))
    const hasGrandPrize = prizes.some(prize => prize.isGrandPrize)

    return {
      prizes,
      totalPrize: hasGrandPrize ? 'Grand Prize' : sumPrizes(prizes)
    };
  }
}

export default PowerballService
