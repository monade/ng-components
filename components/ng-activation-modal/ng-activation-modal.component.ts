import { Component, Input } from '@angular/core';
import { TimeRange, TIME_RANGE_STATUS } from '../ng-time-range/ng-time-range.component';

export const ACTIVATION_MODAL_ID = 'activation_modal';

@Component({
  selector: 'ng-activation-modal',
  templateUrl: './ng-activation-modal.component.html',
  styleUrls: ['./ng-activation-modal.component.scss'],
})
export class NgActivationModalComponent {
  @Input() title!: string;
  @Input() timeRangeObj!: TimeRange;

  modalId = ACTIVATION_MODAL_ID;
  errorMessage = '';

  onTimeRangeChange(timeRange: TimeRange) {
    this.errorMessage = '';
    if (timeRange.status === TIME_RANGE_STATUS.KO) {
      this.errorMessage = 'Time range non valido';
    }
  }
}
