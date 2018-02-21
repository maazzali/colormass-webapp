import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '../common.module';

import { MaterialsService } from './materials.service';

import { MaterialsComponent } from './materials.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'materials', component: MaterialsComponent },
      { path: 'materials/:id', component: MaterialsComponent },
    ])
  ],
  providers: [MaterialsService],
  declarations: [MaterialsComponent]
})
export class MaterialsModule {}




