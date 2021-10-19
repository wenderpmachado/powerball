import RootController from "@/controllers/root";

describe('RootController', () => {
  const sut = new RootController()

  it('should return api version', () => {
    const result = sut.root();

    expect(result).toBeTruthy()
    expect(result["api-version"]).toBeTruthy()
  });
});
