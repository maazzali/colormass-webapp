import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

import { MaterialsComponent } from './materials.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'materials', component: MaterialsComponent },
      { path: 'materials/:id', component: MaterialsComponent }
    ])
  ],
  declarations: [MaterialsComponent]
})
export class MaterialsModule {}




