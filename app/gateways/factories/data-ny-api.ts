import { env } from '@/config/env'
import { makeAxiosHttpClient } from '@/gateways/factories'
import { DataNyAPI } from '@/gateways'

export const makeDataNyAPI = (): DataNyAPI => {
  return new DataNyAPI(
    makeAxiosHttpClient(),
    env.DATA_NY_API,
  )
}
