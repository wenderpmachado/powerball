import { env } from '@/config/env'

describe('env', () => {
  it('should configure environment const', () => {
    expect(env).toBeTruthy()
  });
});
