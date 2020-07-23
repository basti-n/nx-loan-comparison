import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getBanks', () => {
    it('should return banks"', () => {
      const appController = app.get<AppController>(AppController);
      expect(Array.isArray(appController.getBanks())).toBeTruthy();
    });
  });
});
