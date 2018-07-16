import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BackdropComponent } from './components/backdrop/backdrop.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgxModalController } from './services/modal-controller.service';
import { ModalEventsService } from './services/modal-events.service';
import { NavParams, NavParamsToken, provideNavParamsInjectable } from './utils/nav-params';
import { ViewController, ViewControllerToken } from './utils/view-controller';

@NgModule({
  imports: [

  ],
  providers: [
    NgxModalController,
    ModalEventsService,
    [
      {
        provide: NavParamsToken, useValue: {}
      }, {
        provide: NavParams, useFactory: provideNavParamsInjectable, deps: [NavParamsToken]
      }
    ], [
      {
        provide: ViewControllerToken, useValue: ""
      }, {
        provide: ViewController, useFactory: provideNavParamsInjectable, deps: [ViewControllerToken, NavParams]
      }
    ]
  ],
  declarations: [
    ModalContainerComponent,
    ModalComponent,
    BackdropComponent
  ],
  entryComponents: [
    ModalContainerComponent,
    ModalComponent,
    BackdropComponent
  ]
})
export class NgxModalServiceModule { }