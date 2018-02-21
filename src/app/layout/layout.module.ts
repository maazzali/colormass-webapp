import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '../common.module';

import { NavbarComponent } from './navbar/navbar.component';

const COMPONENTS = [NavbarComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class LayoutModule {}
