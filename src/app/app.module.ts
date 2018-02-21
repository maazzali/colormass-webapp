import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from './common.module';
import { LayoutModule } from './layout/layout.module';
import { MaterialsModule } from './materials/materials.module';
import { MiscModule } from './misc/misc.module';

import { InMemMaterialsService } from './in-mem/materials.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemMaterialsService, { delay: 1000 }),
    MiscModule,
    CommonModule,
    MaterialsModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/materials', pathMatch: 'full' },
        { path: 'materials', loadChildren: 'app/materials/materials.module#MaterialsModule' },
      ]
    ),
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
