import { Component, HostListener, ElementRef } from '@angular/core';
import { NgxModalController } from 'dist/ngx-modal-service';
import { ConfirmationDialogComponent } from './modals/confirmation-dialog/confirmation-dialog.component';
import { NgxModalResponse } from 'dist/ngx-modal-service/lib/interfaces/modal-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private ModalCtrl: NgxModalController) {
  }

  ngOnInit() {
  }

  Confirm() {

    let ConfirmationModalData = {
      header: 'Are you sure you want to logout?',
      body: 'This will logout you out of your current session, any unsaved data will be lost'
    }
    let ConfirmationModalOptions = {
      height: 200,
      width: 350
    }

    let ConfirmationModal = this.ModalCtrl.showModal(ConfirmationDialogComponent, ConfirmationModalData, ConfirmationModalOptions);

    ConfirmationModal.onDismiss.then(data => {
      console.log('then', data);
    }).catch(err => {
      console.log('backdrop or negative action preformed');
    })
  }
}