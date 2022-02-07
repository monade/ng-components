import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ResizeService } from 'src/services/resize.service';
import { ModalService } from "./modal.service";

@Component({
  selector: 'ng-modal',
  templateUrl: './ng-modal.component.html',
  styleUrls: ['./ng-modal.component.scss']
})
export class NgModalComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @Output() closeEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() opened: EventEmitter<void> = new EventEmitter<void>();

  private element: HTMLElement;

  constructor(private resizeSvc: ResizeService, private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  ngAfterViewInit(): void {
    this.element.style.display = 'none';
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownEscape(event: KeyboardEvent) {
    this.close()
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  onBackClick(event: MouseEvent, element: HTMLElement) {
    if (event.target !== element) {
      return;
    }
    this.close();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
    this.opened.emit();
  }

  // close modal
  close(): void {
    this.closeEvent.emit();
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  get isMobile() {
    return this.resizeSvc.isMobile;
  }
}
