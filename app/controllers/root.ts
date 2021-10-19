import { Controller, Get, JsonController } from 'routing-controllers';
import * as packageJson from '@/../package.json'

@JsonController()
class RootController {
  @Get('/')
  root() {
    return { 'api-version': packageJson.version };
  }
}

export default RootController
