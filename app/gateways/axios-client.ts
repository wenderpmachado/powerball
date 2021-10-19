import { HttpGetClient, IHttpGetClient } from '@/gateways/client'

import axios from 'axios'

type Input = HttpGetClient.Input

export class AxiosHttpClient implements IHttpGetClient {
  async get ({ url, params }: Input): Promise<any> {
    const result = await axios.get(url, { params })
    return result.data
  }
}
