import { Component, Input } from '@angular/core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';


@Component({
  selector: 'ng-list-counter',
  templateUrl: './ng-list-counter.component.html',
  styleUrls: ['./ng-list-counter.component.scss'],
})
export class NgListCounterComponent {
  tooltipPlacement: NgxPopperjsPlacements = NgxPopperjsPlacements.BOTTOM;
  tooltipTrigger: NgxPopperjsTriggers = NgxPopperjsTriggers.click;

  @Input() list: string[] = [];
  @Input() color: string = 'primary';
}
