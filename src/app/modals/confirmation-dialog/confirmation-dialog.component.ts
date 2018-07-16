import { Component } from '@angular/core';
import { ViewController, NavParams } from 'dist/ngx-modal-service';

@Component({
  selector: 'ng-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  header: string;
  body: string;

  constructor(private ViewCtrl: ViewController, navParams: NavParams) {
    this.header = navParams.get('header') || "Are you sure?";
    this.body = navParams.get('body') || "Do you want to continue?";
  }

  Confirm() {
    this.ViewCtrl.dismiss({
      success: true,
      data: null
    })
  }

  Cancel() {
    this.ViewCtrl.dismiss({
      success: false,
      data: null
    })
  }
}
