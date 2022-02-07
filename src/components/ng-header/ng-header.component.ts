import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { OverflowService } from 'src/app/shared/overflow.service';
import { ResizeService } from "../../../services/resize.service";

export interface RouteChain {
  path: string;
  label: string;
  clickable: boolean;
}

@Component({
  selector: 'ng-header',
  templateUrl: './ng-header.component.html',
  styleUrls: ['./ng-header.component.scss']
})
export class NgHeaderComponent implements OnInit {
  @Input() routes: RouteChain[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private resizeService: ResizeService,
              public overflowService: OverflowService) { }

  ngOnInit(): void {
  }

  navigateTo(route: RouteChain) {
    if(route.clickable) {
      this.router.navigate([route.path]);
    }
  }

  get isMobile() {
    return this.resizeService.isMobile;
  }

}
