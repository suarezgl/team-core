import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICompany } from './commons/models';
import { CompanyService } from './commons/services/company.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public company: string = undefined;
  private unsubscribe: Subject<void> = new Subject();
  constructor(public companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.companySelected$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((companySelected: ICompany) => {
        if (companySelected) {
          this.company = undefined;
          setTimeout(() => {
            this.company = companySelected.alias;
          }, 200);
        }
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
