import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'ng-accordion',
  templateUrl: './ng-accordion.component.html',
  styleUrls: ['./ng-accordion.component.scss']
})
export class NgAccordionComponent {

  isCollapsed: boolean = false;

  constructor(public router: Router) { }
}
