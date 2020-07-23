import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Bank } from '@loan-comparison/models'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('banks')
  getBanks(): Bank[] {
    return this.appService.getBanks();
  }
}
