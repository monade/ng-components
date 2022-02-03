import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { ComponentsService, TOAST_TYPE } from "../components.service";

@Component({
  selector: 'ng-toast',
  templateUrl: './ng-toast.component.html',
  styleUrls: ['./ng-toast.component.scss']
})
export class NgToastComponent {
  constructor(private toastr: ToastrService, private componentsService: ComponentsService) {
    this.componentsService.getToastMessage().subscribe((toastMessage) => {
      switch (toastMessage.type) {
        case TOAST_TYPE.SUCCESS:
          this.showSuccess(toastMessage.message);
          break;
        case TOAST_TYPE.ERROR:
          this.showError(toastMessage.message);
          break;
        case TOAST_TYPE.WARNING:
          this.showWarning(toastMessage.message);
          break;
      }
    })
  }

  showSuccess(message: string) {
    this.toastr.success(message);
  }

  showError(message: string) {
    this.toastr.error(message);
  }

  showWarning(message: string) {
    this.toastr.warning(message);
  }

}
