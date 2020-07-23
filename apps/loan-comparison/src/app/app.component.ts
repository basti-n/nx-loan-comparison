import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BanksService } from './services';
import { Bank } from '@models';

@Component({
  selector: 'loan-comparison-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'loan-comparison';
  banks$: Observable<Bank[]>;

  constructor(private banksService: BanksService) {
    this.banks$ = this.banksService.getBanks();
  }
}
