import { createExpressServer, getMetadataArgsStorage } from 'routing-controllers';
// import { routingControllersToSpec } from 'routing-controllers-openapi'
// import * as swaggerUiExpress from 'swagger-ui-express'

import { setupMiddlewares } from '@/config/middlewares'
import PowerballController from '@/controllers/powerball';
import RootController from '@/controllers/root';

// Creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [
    RootController,
    PowerballController,
  ],
});

// Setup Middlewares
setupMiddlewares(app)

// Generates OpenAPI - developing
// const storage = getMetadataArgsStorage()
// const spec = routingControllersToSpec(storage)
// app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(spec))

export default app
