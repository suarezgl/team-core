import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICompany } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private companies: ICompany[];
  private companySource = new BehaviorSubject<ICompany>(null);
  public companySelected$ = this.companySource.asObservable();

  constructor() {
    this.companies = [
      {
        name: 'BitCoin',
        alias: 'BTC',
        lastDay: '',
        lastWeek: '',
        capital: 20020.0,
        volume: 123.0092,
        price: 145.0,
      },
      {
        name: 'Ethereum',
        alias: 'ETH',
        lastDay: '',
        lastWeek: '',
        capital: 50020.0,
        volume: 433.0092,
        price: 112245.0,
      },
      {
        name: 'Tether',
        alias: 'BTC',
        lastDay: '',
        lastWeek: '',
        capital: 32999.1,
        volume: 1233.11,
        price: 7450000,
      },
      {
        name: 'Binance Coin',
        alias: 'BNB',
        lastDay: '',
        lastWeek: '',
        capital: 12000,
        volume: 45440,
        price: 6003.0,
      },
    ];
  }

  get Companies() {
    return this.companies;
  }

  companySelected(company: ICompany): void {
    this.companySource.next(company);
  }
}
