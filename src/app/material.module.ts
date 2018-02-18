import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

const MODULES = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule {}
