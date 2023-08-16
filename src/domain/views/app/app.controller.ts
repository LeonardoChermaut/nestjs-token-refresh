import { Controller, Get } from '@nestjs/common';
import { AppService } from '@src/domain/views/app/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
