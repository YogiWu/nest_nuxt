import * as config from '~/nuxt.config.js'
import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common'

// tslint:disable-next-line:no-var-requires
const { Builder, Nuxt } = require('nuxt')

@Middleware()
export class NuxtMiddleware implements NestMiddleware {
  async resolve (name: string): Promise<ExpressMiddleware> {

    const nuxt = await new Nuxt(config)
    config.dev = !(process.env.NODE_ENV === 'production')

    if (config.dev) {
      new Builder(nuxt).build()
    }
    return async (req, res, next) => {
      await nuxt.render(req, res, next)
      // console.log(`[${name}] Request...`) // [ApplicationModule] Request...
      // next()
    }
  }
}
