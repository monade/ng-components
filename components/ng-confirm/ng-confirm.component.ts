import { Component, ElementRef, OnInit } from '@angular/core';
import { ModalService } from '../ng-modal/modal.service';
import { ConfirmService } from "./confirm.service";

@Component({
  selector: 'ng-confirm',
  templateUrl: './ng-confirm.component.html',
  styleUrls: ['./ng-confirm.component.scss']
})
export class NgConfirmComponent implements OnInit {
  title: string = 'Confermi?';
  content: string = 'Confermi?';

  constructor(private confirmService: ConfirmService, private modalService: ModalService, private el: ElementRef) {
  }

  ngOnInit(): void {
    this.confirmService.opened$.subscribe(data => {
      this.title = data.title;
      this.content = data.content;
      this.modalService.open('confirm-modal');
    })
    this.confirmService.closed$.subscribe(data => {
      this.modalService.close('confirm-modal');
    })
  }

  confirm() {
    this.confirmService.closed$.next(true);
  }

  cancel() {
    this.confirmService.closed$.next(false);
  }
}
