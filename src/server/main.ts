import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './modules/app.module'

async function bootstrap () {
  const app = await NestFactory.create(ApplicationModule)
  await app.listen(3000, () => console.log('Application is listening on port 3000.'))
}
bootstrap()
