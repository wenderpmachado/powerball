import { makeDataNyAPI } from "@/gateways/factories";

describe('makeDataNyAPI ', () => {
  it('should create an object', () => {
    const result = makeDataNyAPI()

    expect(result).toBeTruthy()
  });
});
