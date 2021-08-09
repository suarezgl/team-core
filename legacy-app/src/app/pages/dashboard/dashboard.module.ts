import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: DashboardComponent }];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
