import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common'
import { AppController } from '../controllers/app.controller'
import { NuxtController } from '../controllers/nuxt.controller'
import { NuxtMiddleware } from '../middleware/nuxt.middleware'

@Module({
  // imports: [],
  // controllers: [AppController],
  controllers: [AppController],
  components: []
})
export class ApplicationModule implements NestModule {
  configure (consumer: MiddlewaresConsumer): void {
    consumer.apply(NuxtMiddleware).forRoutes(NuxtController)
  }
}
