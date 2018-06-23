import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxModalResponse } from '../interfaces/modal-response';

@Injectable()
export class ModalEventsService {
  
  onDismiss = new Subject<{ Guid: string, Data: NgxModalResponse }>();

  constructor() { }

  dismiss(Guid, Data) {
    this.onDismiss.next({ Guid, Data });
  }

}
