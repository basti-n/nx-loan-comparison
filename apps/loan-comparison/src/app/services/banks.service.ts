import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bank } from '@models';

@Injectable({ providedIn: 'root' })
export class BanksService {
  constructor(private httpClient: HttpClient) {}

  public getBanks(): Observable<Bank[]> {
    return this.httpClient.get<Bank[]>('api/banks');
  }
}
