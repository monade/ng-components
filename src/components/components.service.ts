import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

export enum TOAST_TYPE {
  SUCCESS,
  ERROR,
  WARNING
}

export interface ToastMessage {
  type: TOAST_TYPE;
  message: string;
}

@Injectable()
export class ComponentsService {

  private subject = new Subject<ToastMessage>();

  showToastMessage(toastMessage: ToastMessage) {
    this.subject.next(toastMessage);
  }

  getToastMessage(): Observable<ToastMessage> {
    return this.subject.asObservable();
  }
}
