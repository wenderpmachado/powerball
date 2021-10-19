import { makeAxiosHttpClient } from "@/gateways/factories";

describe('makeAxiosHttpClient ', () => {
  it('should create an object', () => {
    const result = makeAxiosHttpClient()

    expect(result).toBeTruthy()
  });
});
