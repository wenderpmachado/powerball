import * as packageJson from '@/../package.json';
import { Get, JsonController } from 'routing-controllers';

@JsonController()
class RootController {
  @Get('/')
  root() {
    return { 'api-version': packageJson.version };
  }
}

export default RootController
