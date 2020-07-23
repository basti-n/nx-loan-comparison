import { Injectable } from '@nestjs/common';
import { Bank } from '@loan-comparison/models';

@Injectable()
export class AppService {
  banks: Bank[] = [
    { id: 1, name: 'Targobank' },
    { id: 2, name: 'PSD Bank' },
    { id: 3, name: 'Kreditreserve' },
  ];

  getBanks(): Bank[] {
    return this.banks;
  }

  addBank(bank: Bank): void {
    this.banks = [...this.banks, bank];
  }
}
