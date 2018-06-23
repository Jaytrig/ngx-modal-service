import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgModalModule } from 'ng-modal';
import { ModalContrService } from './modal-contr.service';
import { ModalContainerComponent } from './modal-container/modal-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContainerComponent
  ],
  imports: [
    BrowserModule,
    NgModalModule
  ],
  providers: [
    ModalContrService
  ],
  entryComponents: [
    ModalContainerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
