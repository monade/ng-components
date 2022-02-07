import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

declare const require: any;

@Component({
  selector: 'ng-icon',
  templateUrl: './ng-icon.component.html',
  styleUrls: ['./ng-icon.component.scss']
})
export class NgIconComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() spin = false;
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' = 'md';
  @ViewChild('icon') spanElement!: ElementRef<HTMLElement>;

  classes: any = { 'spin': this.spin, [this.sizeClass]: true };

  ngOnInit() {
    this.classes = { 'spin': this.spin, [this.sizeClass]: true };
  }

  ngAfterViewInit() {
    this.spanElement.nativeElement.innerHTML = this.getSvg();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.classes = { 'spin': this.spin, [this.sizeClass]: true };
  }

  getIcon() {
    if (this.spanElement) {
      return this.spanElement.nativeElement.textContent?.trim();
    }
    else {
      return null;
    }
  }

  getSvg() {
    const icon = this.getIcon();
    return icon ? require(`!svg-inline-loader!../../../assets/icons/${icon}.svg`) : '';
  }

  get sizeClass() {
    return `icon-${this.size}`;
  }

}
