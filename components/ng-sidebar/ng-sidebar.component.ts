import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SCREEN_SIZE } from "../../../models/screen-size.enum";
import { ResizeService } from "../../../services/resize.service";

export interface SidebarItem {
  name: string;
  icon: string;
  label: string;
  isTitle: boolean;
  disabled?: boolean;
  role?: string;
}

@Component({
  selector: 'ng-sidebar',
  templateUrl: './ng-sidebar.component.html',
  styleUrls: ['./ng-sidebar.component.scss']
})
export class NgSidebarComponent implements OnInit {

  public sidebarItems: SidebarItem[] = [
    { name:'planning', icon: 'calendar', label: 'Pianificazione', isTitle: false, role: 'PLANNING' },
    { name:'simulation', icon: 'simulation', label: 'Simulazione', isTitle: false, disabled: false, role: 'SIMULATION' },
    { name:'loans', icon: 'loans', label: 'Prestiti', isTitle: false, disabled: false, role: 'LOAN' },
    { name:'shiftReport', icon: 'memorial', label: 'Memoriale', isTitle: false, disabled: false, role: 'SHIFT_REPORT' },
    { name:'', icon: '', label: 'GESTIONE', isTitle: true },
    { name:'workforce', icon: 'resources', label: 'Risorse', isTitle: false, role: 'WORKFORCE' },
    { name:'presence', icon: 'presence', label: 'Presenze', isTitle: false, role: 'TIMESHEET' },
    { name:'template', icon: 'template', label: 'Template', isTitle: false, disabled: false, role: 'TEMPLATE' },
    { name:'', icon: '', label: 'IMPOSTAZIONI', isTitle: true },
    { name:'admin/sortingCenter', icon: 'administration', label: 'Amministrazione', isTitle: false, role: 'SORTING_CENTER' },
    { name:'workstationType', icon: 'pdl-typology', label: 'Tipologie PDL', isTitle: false, role: 'WORKSTATION_TYPE' },
    { name:'workstation', icon: 'pdl', label: 'PDL', isTitle: false, role: 'WORKSTATION' },
    { name:'admin/user', icon: 'user', label: 'Utenti', isTitle: false, role: 'USER' },
  ];

  size: SCREEN_SIZE = SCREEN_SIZE.SM;
  open = false;

  constructor(private resizeSvc: ResizeService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url === '/' && !this.isMobile) {
        this.open = true;
      }
    })
  }

  ngOnInit(): void {
    for (const item of this.sidebarItems) {
      if (!item.role) {
        continue;
      }
      item.disabled = false;
    }
  }

  get sidebarOpen() {
    return this.resizeSvc.isMobile && !this.open;
  }

  get isMobile() {
    return this.resizeSvc.isMobile;
  }

  openSidebar() {
    this.open = true;
  }

  closeSidebar() {
    this.open = false;
  }

  onIconClick() {
    if (this.open) {
      this.goToHome();
    } else {
      this.openSidebar();
    }
  }

  goToHome() {
    this.router.navigate(['/']);
    this.open = false;
  }
}
