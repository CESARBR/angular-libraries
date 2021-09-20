import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SidebarCloseEventModel } from '../models/sidebar-close-event.model';
import { LibSidebarService } from '../service/lib-sidebar.service';

@Component({
  selector: 'sidebar',
  templateUrl: 'lib-sidebar.component.html',
  styleUrls: ['lib-sidebar.component.scss'],
})
export class LibSidebarComponent implements OnInit, OnDestroy {
  private element: any;
  public isOpened = false;

  @Input() id = '';
  @Input() isSingleOpen = true;
  @Input() hiddenFooter = false;
  
  @Output() closeSidebar = new EventEmitter<SidebarCloseEventModel>();

  constructor(
    private readonly sidebarService: LibSidebarService,
    private elementRef: ElementRef
  ) {
    this.element = elementRef.nativeElement;
    this.element.style.display = 'none';
  }

  ngOnInit(): void {
    // ensure sidebar has an ID
    if (!this.id) {
      console.log('error: sidebar must have an ID');
      return;
    }

    // include self to the sidebars service, to be accessible from controllers
    this.sidebarService.add(this);
  }

  ngOnDestroy() {
    // remove self from service when is destroyed
    this.destroy();
  }

  public open() {
    this.element.style.display = 'block';
    this.isOpened = true;
  }

  public close() {
    this.element.style.display = 'none';
    this.isOpened = false;
    const closeEvent = new SidebarCloseEventModel(this.id);
    this.closeSidebar.emit(closeEvent);
  }

  public destroy() {
    // remove self from service
    this.sidebarService.remove(this.id);
    this.element.remove();
  }
}
