import * as faker from 'faker'
import { DataNyAPI, IHttpGetClient } from "@/gateways";

const mockHttpClient: IHttpGetClient = {
  get: jest.fn()
};

export function mockDataNyAPI(httpClient = mockHttpClient) {
  const baseUrl = faker.internet.url();

  return new DataNyAPI(httpClient, baseUrl);
}
