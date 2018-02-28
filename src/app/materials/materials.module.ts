import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '../common.module';

import { MaterialsService } from './materials.service';

import { MaterialsComponent } from './materials.component';
import { MaterialComponent } from './material/material.component';
import { MaterialDetailComponent } from './material-detail/material-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MaterialsComponent,
        children: [{ path: ':id', component: MaterialDetailComponent }
        ]
      }
    ])
  ],
  providers: [MaterialsService],
  entryComponents: [MaterialComponent],
  declarations: [MaterialsComponent, MaterialComponent, MaterialDetailComponent]
})
export class MaterialsModule {}




