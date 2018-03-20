import { NestFactory } from '@nestjs/core'
import * as config from '~/nuxt.config.js'
import { ApplicationModule } from './modules/app.module'
import express from 'express'

// tslint:disable-next-line:no-var-requires
const { Builder, Nuxt } = require('nuxt')

// process.env.DEBUG = 'nuxt:*'

async function bootstrap() {
  // Import and Set Nuxt.js options
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config)
  config.dev = !(process.env.NODE_ENV === 'production')
  if (config.dev) {
    new Builder(nuxt).build()
  }
  const server = express()
  const app = await NestFactory.create(ApplicationModule, server)
  await app.listen(3000, () => console.log('Application is listening on port 3000.'))
  server.use(nuxt.render)
}

bootstrap()
