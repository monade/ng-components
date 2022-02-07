import { Component, Input } from '@angular/core';

export enum BUTTON_TYPE {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DELETE = 'delete',
}

@Component({
  selector: 'ng-button-icon',
  templateUrl: './ng-button-icon.component.html',
  styleUrls: ['./ng-button-icon.component.scss'],
})
export class NgButtonIconComponent {
  @Input() buttonType: string = BUTTON_TYPE.PRIMARY.toString();
  @Input() iconName!: string;

  get buttonClass() {
    switch (this.buttonType) {
      case BUTTON_TYPE.PRIMARY.toString():
        return 'btn-primary';
      case BUTTON_TYPE.SECONDARY.toString():
        return 'btn-secondary';
      case BUTTON_TYPE.DELETE.toString():
        return 'btn-outline-danger';
      default:
        return '';
    }
  }
}
