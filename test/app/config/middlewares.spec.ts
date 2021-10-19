import { Express } from 'express'
import { setupMiddlewares } from '@/config/middlewares'

describe('middlewares', () => {
  it('should setup middlewares', () => {
    const app = {
      use: jest.fn()
    } as unknown as Express

    const middlewares = setupMiddlewares(app);

    expect(middlewares).toBeUndefined()
  });
});
