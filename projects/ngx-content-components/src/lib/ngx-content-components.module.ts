import { NgModule } from '@angular/core';
import { NgxBodyComponent } from './components/ngx-body/ngx-body.component';
import { NgxFooterComponent } from './components/ngx-footer/ngx-footer.component';
import { NgxHeaderComponent } from './components/ngx-header/ngx-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxBodyComponent,
    NgxHeaderComponent,
    NgxFooterComponent
  ], exports: [
    NgxBodyComponent,
    NgxHeaderComponent,
    NgxFooterComponent
  ]
})
export class NgxContentComponentsModule { }
