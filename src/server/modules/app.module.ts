import { Module } from '@nestjs/common'
import { AppController } from '../controllers/app.controller'

@Module({
  // imports: [],
  // controllers: [AppController],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
