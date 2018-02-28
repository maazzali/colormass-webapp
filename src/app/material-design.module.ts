import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';

const MODULES = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatSelectModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialDesignModule {}
