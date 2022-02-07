import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeService } from '../../../services/resize.service';

@Component({
  selector: 'ng-sidebar-item',
  templateUrl: './ng-sidebar-item.component.html',
  styleUrls: ['./ng-sidebar-item.component.scss'],
})
export class NgSidebarItemComponent {
  @Input() to = '';
  @Input() icon = '';
  @Input() label = '';
  @Input() isTitle = false;
  @Input() disabled? = false;
  @Input() sidebarOpen = false;

  constructor(private router: Router, private resizeSvc: ResizeService) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  get isMobile() {
    return this.resizeSvc.isMobile;
  }
}
