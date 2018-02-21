import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule, MatListModule, MatChipsModule, MatProgressSpinnerModule } from '@angular/material';

const MODULES = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatChipsModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule {}
