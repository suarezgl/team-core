import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [HeaderModule],
  exports: [HeaderModule],
  declarations: [],
})
export class LayoutModule {}
