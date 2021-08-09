import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/commons/models';
import { CompanyService } from 'src/app/commons/services/company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public dataTable: ICompany[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.dataTable = this.companyService.Companies;
    this.fakeRealTimeAnimation();
  }

  public itemSelected(item: ICompany) {
    this.companyService.companySelected(item);
  }

  private fakeRealTimeAnimation(): void {
    setInterval(() => {
      this.dataTable.reverse();
    }, 60000);
  }
}
