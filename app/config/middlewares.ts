import { Express, json } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

export const setupMiddlewares = (app: Express): void => {
  app.use(cors())
  app.use(compression());
  app.use(helmet())
  app.use(json())
  app.use((req, res, next) => {
    res.type('json')
    next()
  })
  // TODO: Add middleware error handler
}
