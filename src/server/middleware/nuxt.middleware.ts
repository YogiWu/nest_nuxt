import * as config from '~/nuxt.config.js'
import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common'

// tslint:disable-next-line:no-var-requires
const { Builder, Nuxt } = require('nuxt')

@Middleware()
export class LoggerMiddleware implements NestMiddleware {
  async resolve(name: string): Promise<ExpressMiddleware> {
    const nuxt = await new Nuxt(config)
    return async (req, res, next) => {
      await nuxt.render(req, res, next)
      console.log(`[${name}] Request...`) // [ApplicationModule] Request...
      next()
    }
 }
}
