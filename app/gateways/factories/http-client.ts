import { AxiosHttpClient } from '@/gateways'

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
