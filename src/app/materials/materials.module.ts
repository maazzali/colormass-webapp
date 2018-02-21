import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { CommonComponentsModule } from '../common-components/common-components.module';

import { MaterialsService } from './materials.service';

import { MaterialsComponent } from './materials.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CommonComponentsModule,
    RouterModule.forChild([
      { path: 'materials', component: MaterialsComponent },
      { path: 'materials/:id', component: MaterialsComponent },
    ])
  ],
  providers: [MaterialsService],
  declarations: [MaterialsComponent]
})
export class MaterialsModule {}




