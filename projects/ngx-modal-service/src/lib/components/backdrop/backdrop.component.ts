import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {
  @Input() index: number;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  setBackgroudColor(color: string, opacity?: number) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    if (opacity) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', opacity);
    }
  }

  setIndex(index: number) {
    this.renderer.setStyle(this.el.nativeElement, 'z-index', index);
  }

  ngOnInit() {
    if (this.index) {
      this.renderer.setStyle(this.el.nativeElement, 'z-index', this.index);
    }
  }
}
