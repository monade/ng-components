import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { SCREEN_SIZE } from "../../../models/screen-size.enum";
import { ResizeService } from "../../../services/resize.service";

@Component({
  selector: 'ng-size-detector',
  templateUrl: './ng-size-detector.component.html',
  styleUrls: ['./ng-size-detector.component.scss']
})
export class NgSizeDetectorComponent implements AfterViewInit {
  prefix = 'is-';
  sizes = [
    {
      id: SCREEN_SIZE.XS, name: 'xs',
      css: `d-block d-sm-none`
    },
    {
      id: SCREEN_SIZE.SM, name: 'sm',
      css: `d-none d-sm-block d-md-none`
    },
    {
      id: SCREEN_SIZE.MD, name: 'md',
      css: `d-none d-md-block d-lg-none`
    },
    {
      id: SCREEN_SIZE.LG, name: 'lg',
      css: `d-none d-lg-block d-xl-none`
    },
    {
      id: SCREEN_SIZE.XL, name: 'xl',
      css: `d-none d-xl-block`
    },
  ];

  constructor(private elementRef: ElementRef, private resizeSvc: ResizeService) { }

  @HostListener("window:resize", [])
  private onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  private detectScreenSize() {
    this.resizeSvc.update();
  }

}
