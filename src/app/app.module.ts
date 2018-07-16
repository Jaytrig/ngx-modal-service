import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxModalServiceModule } from 'dist/ngx-modal-service';
import { NgxContentComponentsModule } from 'dist/ngx-content-components';
import { ConfirmationDialogComponent } from './modals/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    NgxModalServiceModule,
    NgxContentComponentsModule
  ],
  providers: [
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
