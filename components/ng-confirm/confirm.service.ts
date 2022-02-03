import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

export interface ConfirmData {
  title: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class ConfirmService {
  opened$: Subject<ConfirmData> = new Subject<ConfirmData>();
  closed$: Subject<boolean> = new Subject<boolean>();

  show(data: ConfirmData) {
    this.opened$.next(data);
    return this.closed$.pipe(take(1));
  }
}
