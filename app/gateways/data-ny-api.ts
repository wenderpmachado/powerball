import { IHttpGetClient } from '@/gateways'
import { ILoadGameInfo, LoadGameInfo } from '@/gateways/contracts'
import { isEmpty } from 'lodash'

type Input = LoadGameInfo.Input
type Output = LoadGameInfo.Output

export class DataNyAPI implements ILoadGameInfo {
  constructor (
    private readonly httpClient: IHttpGetClient,
    private readonly baseUrl: string
  ) {}

  private async getGameInfo(drawDate: string): Promise<Output[]> {
    return this.httpClient.get({
      url: `${this.baseUrl}`,
      params: {
        draw_date: drawDate
      }
    })
  }

  async loadResult({ date }: Input): Promise<Output> {
    const result = await this.getGameInfo(date);

    return !isEmpty(result) ? result[0] : undefined;
  }
}
