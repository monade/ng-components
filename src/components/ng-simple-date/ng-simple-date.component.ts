import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addDays } from 'date-fns';
import { en_US, NzI18nService } from "ng-zorro-antd/i18n";

declare const require: any;

@Component({
  selector: 'ng-simple-date',
  templateUrl: './ng-simple-date.component.html',
  styleUrls: ['./ng-simple-date.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => NgSimpleDate)
  }]
})
export class NgSimpleDate implements OnInit, ControlValueAccessor {
  private _value: Date = new Date();

  @Input() withArrows = false;
  @Input() disabled = false;

  @Input('ngModel')
  set date(value: Date) {
    this._value = value;
  }
  get date() {
    return this._value;
  }

  @Output('ngModelChange')
  dateChange = new EventEmitter<Date>();

  onDateChange(value: Date) {
    this.dateChange.emit(value);
    this.onChange(this._value);
  }

  // ===== FormControl
  onChange = (value: Date) => { /* This is intentional */ };

  writeValue(value: Date): void {
    this._value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void { /* This is intentional */ }
  // /==== FormControl

  constructor(private i18n: NzI18nService,) {
  }

  ngOnInit() {
    this.i18n.setLocale(en_US);
  }

  onNextClick() {
    this._value = addDays(this._value, 1);
    this.onDateChange(this._value);
  }

  onPrevClick() {
    this._value = addDays(this._value, -1);
    this.onDateChange(this._value);
  }
}
