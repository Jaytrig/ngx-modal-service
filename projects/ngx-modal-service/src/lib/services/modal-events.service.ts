import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxModalResponse } from '../interfaces/modal-response';

@Injectable()
export class ModalEventsService {

  onDismiss = new Subject<{ Guid: string, Data: NgxModalResponse }>();
  onDestory = new Subject<string>();

  constructor() { }

  dismiss(Guid: string, Data: any) {
    this.onDismiss.next({ Guid, Data });
  }

  destory(Guid: string) {
    this.onDestory.next(Guid);
  }

}
