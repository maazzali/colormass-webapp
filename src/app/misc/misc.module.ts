import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalComponent } from './modal/modal.component';

import { ModalService } from './modal/modal.service';

const COMPONENTS = [ModalComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [ModalService]
})
export class MiscModule {}
