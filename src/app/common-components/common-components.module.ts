import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from './infinite-scroll.directive';

const COMPONENTS = [InfiniteScrollDirective];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class CommonComponentsModule {}
