import { Controller, Get } from '@nestjs/common'

@Controller()
export class NuxtController {
  @Get()
  root (): void {
    // return ''
  }
}
