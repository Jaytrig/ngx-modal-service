import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ngx-body',
  templateUrl: './ngx-body.component.html',
  styleUrls: ['./ngx-body.component.scss']
})
export class NgxBodyComponent implements OnInit {


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const element = this.el.nativeElement;

    const header: HTMLElement = element.parentElement.querySelector('ngx-header');
    const footer: HTMLElement = element.parentElement.querySelector('ngx-footer');

    if (header) {
      this.renderer.setStyle(this.el.nativeElement, 'top', (header.offsetHeight) + 'px');
    }
    if (footer) {
      this.renderer.setStyle(this.el.nativeElement, 'bottom', footer.offsetHeight + 'px');
    }
  }

  ngAfterContentChecked() {
    const element = this.el.nativeElement;

    const header: HTMLElement = element.parentElement.querySelector('ngx-header');
    const footer: HTMLElement = element.parentElement.querySelector('ngx-footer');

    if (header) {
      this.renderer.setStyle(this.el.nativeElement, 'top', header.offsetHeight + 'px');
    }
    if (footer) {
      this.renderer.setStyle(this.el.nativeElement, 'bottom', footer.offsetHeight + 'px');
    }

  }

  GetNativeElement() {
    return this.el.nativeElement;
  }

}
