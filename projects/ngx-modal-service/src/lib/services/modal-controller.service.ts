import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

import { ModalContainerComponent } from '../components/modal-container/modal-container.component';
import { ModalComponent } from '../components/modal/modal.component';
import { getProviders } from '../utils/provider';
import { ModalEventsService } from './modal-events.service';
import { NgxModalOptions } from '../interfaces/modal-options';

@Injectable()
export class NgxModalController {

  renderer: Renderer2;

  constructor(private compFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef,
    private injector: Injector, rendererFactory: RendererFactory2, private ModalEvent: ModalEventsService) {
    this.renderer = rendererFactory.createRenderer(null, null);

    this.ModalEvent.onDismiss.subscribe((data) => {
      let modal = this.count[data.Guid];
      modal.destroy();

      delete this.count[data.Guid];

      if (Object.keys(this.count).length == 0) {
        this.renderer.removeClass(document.body, 'modal-open');
      }
    })
  }

  count = {} as { [key: string]: ComponentRef<ModalComponent> };

  showModal(Comp: any, data: { [key: string]: any } = {}, options: NgxModalOptions = {}) {
    options = { height: 500, width: 500, index: 9000 + Object.keys(this.count).length + 10, backdrop: true, backdropDismiss: true, ...options };

    const GUID = this.createGuid();

    const factory = this.compFactoryResolver.resolveComponentFactory(Comp);
    const childInjector = Injector.create(getProviders(GUID, data), this.injector);
    const componentRef = factory.create(childInjector);

    this.appRef.attachView(componentRef.hostView);

    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    const container = this.checkWrapper();
    const modal = this.CreateModal(options, childInjector);

    this.count[GUID] = modal;

    const modalEl = this.getHTMLElement(modal);

    const wapperContents = modalEl.querySelector('.modal-wrapper').querySelector('.modal-contents');

    this.renderer.appendChild(wapperContents, domElement);
    this.renderer.appendChild(container.querySelector('.modal-wrapper'), modalEl);

    this.renderer.addClass(document.body, 'modal-open');

    return modal.instance;
  }

  private checkWrapper() {
    const root = this.getHTMLElement(this.appRef.components[0]).localName;
    let container = document.body.querySelector(root).querySelector('modal-container');

    if (container) { return container; }

    const factory = this.compFactoryResolver.resolveComponentFactory(ModalContainerComponent);
    const componentRef = factory.create(this.injector);

    this.appRef.attachView(componentRef.hostView);

    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;


    this.renderer.appendChild(document.body.querySelector(root), domElement);

    return domElement;

  }


  private CreateModal(options: any, childInjector: Injector) {
    const factory = this.compFactoryResolver.resolveComponentFactory(ModalComponent);
    const componentRef = factory.create(childInjector);

    componentRef.instance.options = options;
    this.appRef.attachView(componentRef.hostView);
    return componentRef;
  }


  private getHTMLElement(componentRef: any) {
    return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }

  private createGuid(): string {
    return ('' + [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, ch => {
      let c = Number(ch);
      return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    }
    )
  }

}