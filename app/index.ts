import 'reflect-metadata'
import './config/module-alias'
import { env } from '@/config/env'
import expressApp from '@/app'

const port = env.PORT;

process.on('unhandledRejection', error => {
  console.error(error)
  process.exit(1)
})

process.on('uncaughtException', error => {
  console.error(error)
  process.exit(1)
})

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

const httpServer = expressApp.listen(port)
console.log(`App listening on port ${port}`)

function shutdown() {
  httpServer.close()
  console.log('\nApp shutdown')
  process.exit(0)
}
