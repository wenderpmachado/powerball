import { LoadGameInfo } from '@/gateways/contracts';
import PowerballService, { IPickResults, IPowerballService } from '@/services/powerball';
import { isSequencyValid } from '@/utils/is-sequency-valid';
import { isEmpty } from 'lodash';
import { BodyParam, Get, JsonController, Post, QueryParam } from 'routing-controllers';

export interface IErrorResponse {
  hasError: boolean;
  message: string;
}

export type TResponse<T> = IErrorResponse | T

@JsonController('/powerball')
class PowerballController {
  // TODO: Add dependency injection
  constructor(private readonly service: IPowerballService = new PowerballService()) {}

  @Get('/game')
  async getGameByDate(
    @QueryParam('date') date: string
  ): Promise<TResponse<LoadGameInfo.Output>> {
    try {
      if (isEmpty(date)) {
        throw new Error('Date not informed');
      }

      return this.service.getGameByDate(date);
    } catch (error: any) {
      return {
        hasError: true,
        message: error.message
      }
    }
  }

  @Post('/game/check')
  async checkNumbers(
    @BodyParam('date') date: string,
    @BodyParam('picks') picks: string[]
  ): Promise<TResponse<IPickResults>> {
    try {
      if (isEmpty(date)) {
        throw new Error('Date not informed');
      }

      if (isEmpty(picks)) {
        throw new Error('Date not informed');
      }

      picks.forEach(pick => {
        if (!isSequencyValid(pick)) {
          throw new Error(`Pick '${pick}' is not valid`)
        }
      })

      return this.service.checkNumbers(date, picks);
    } catch (error: any) {
      return {
        hasError: true,
        message: error.message
      }
    }
  }
}

export default PowerballController
