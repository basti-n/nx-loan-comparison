import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Bank } from '@models'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('banks')
  getBanks(): Bank[] {
    return this.appService.getBanks();
  }
}
