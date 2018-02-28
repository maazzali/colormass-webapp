import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonComponentsModule } from './common-components/common-components.module';
import { MaterialDesignModule } from './material-design.module';


const COMMON_MODULES = [
  NgCommonModule,
  CommonComponentsModule,
  MaterialDesignModule,
  FlexLayoutModule
];

@NgModule({
  exports: COMMON_MODULES,
})
export class CommonModule {}
