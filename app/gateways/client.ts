export interface IHttpGetClient {
  get:<T = any> (input: HttpGetClient.Input) => Promise<T>
}

export namespace HttpGetClient {
  export type Input = {
    url: string
    params: object
  }
}
