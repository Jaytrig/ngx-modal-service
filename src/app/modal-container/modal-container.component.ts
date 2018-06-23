import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavParams } from '../modal-contr.service';

@Component({
  selector: 'ng-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {

  constructor(private NavParams: NavParams) { }

  ngOnInit() {
  }

}
