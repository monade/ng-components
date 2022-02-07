import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { CommonModule, DecimalPipe } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NzAnchorModule } from "ng-zorro-antd/anchor";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NgxPopperjsModule } from 'ngx-popperjs';
import { ToastrModule } from "ngx-toastr";
import { ClickOutsideDirective } from "../directives/click-outside.directive";
import { ComponentsService } from "./components.service";
import { NgAccordionComponent } from './ng-accordion/ng-accordion.component';
import { NgActivationModalComponent } from './ng-activation-modal/ng-activation-modal.component';
import { NgButtonIconComponent } from './ng-button-icon/ng-button-icon.component';
import { NgCheckboxComponent } from "./ng-checkbox/ng-checkbox.component";
import { NgConfirmComponent } from './ng-confirm/ng-confirm.component';
import { NgHeaderComponent } from "./ng-header/ng-header.component";
import { NgIconComponent } from "./ng-icon/ng-icon.component";
import { NgListCounterComponent } from './ng-list-counter/ng-list-counter.component';
import { NgModalComponent } from './ng-modal/ng-modal.component';
import { NgMultiSwitcherComponent } from "./ng-multi-switcher/ng-multi-switcher.component";
import { NgPopoverComponent } from './ng-popover/ng-popover.component';
import { NgRatingComponent } from "./ng-rating/ng-rating.component";
import { NgSelectComponent } from "./ng-select/ng-select.component";
import { NgSidebarItemComponent } from "./ng-sidebar-item/ng-sidebar-item.component";
import { NgSidebarComponent } from "./ng-sidebar/ng-sidebar.component";
import { NgSimpleDate } from './ng-simple-date/ng-simple-date.component';
import { NgSizeDetectorComponent } from "./ng-size-detector/ng-size-detector.component";
import { NgSliderComponent } from "./ng-slider/ng-slider.component";
import { NgSpinnerComponent } from './ng-spinner/ng-spinner.component';
import { NgSwitchButtonComponent } from "./ng-switch-button/ng-switch-button.component";
import { NgTestComponent } from './ng-test/ng-test.component';
import { NgTimeRangeComponent } from './ng-time-range/ng-time-range.component';
import { NgToastComponent } from './ng-toast/ng-toast.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgxSliderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true,
    }),
    NgxPopperjsModule,
    NzPopoverModule,
    NzAnchorModule,
    NzDatePickerModule,
  ],
  declarations: [
    NgIconComponent,
    NgCheckboxComponent,
    NgHeaderComponent,
    NgMultiSwitcherComponent,
    NgRatingComponent,
    NgSelectComponent,
    NgSidebarComponent,
    NgSidebarItemComponent,
    NgSizeDetectorComponent,
    NgSliderComponent,
    NgSwitchButtonComponent,
    NgSimpleDate,
    NgToastComponent,
    NgButtonIconComponent,
    NgTimeRangeComponent,
    NgModalComponent,
    NgActivationModalComponent,
    NgPopoverComponent,
    NgListCounterComponent,
    ClickOutsideDirective,
    NgTestComponent,
    NgAccordionComponent,
    NgConfirmComponent,
    NgSpinnerComponent,
  ],
  providers: [
    ComponentsService,
    DecimalPipe
  ],
  exports: [
    ClickOutsideDirective,
    NgIconComponent,
    NgCheckboxComponent,
    NgHeaderComponent,
    NgMultiSwitcherComponent,
    NgRatingComponent,
    NgSelectComponent,
    NgSidebarComponent,
    NgSidebarItemComponent,
    NgSizeDetectorComponent,
    NgSliderComponent,
    NgSwitchButtonComponent,
    NgSimpleDate,
    NgToastComponent,
    NgButtonIconComponent,
    NgTimeRangeComponent,
    NgActivationModalComponent,
    NgModalComponent,
    NgListCounterComponent,
    NgTestComponent,
    NgAccordionComponent,
    NgConfirmComponent,
    NgSpinnerComponent,
  ],
})

export class ComponentsModule { }
