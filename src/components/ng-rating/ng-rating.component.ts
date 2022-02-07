import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Required } from 'src/app/decorators/Required';

@Component({
  selector: 'ng-rating',
  templateUrl: './ng-rating.component.html',
  styleUrls: ['./ng-rating.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => NgRatingComponent)
  }]
})
export class NgRatingComponent implements ControlValueAccessor {

  private _value!: number | string;

  @Input()
  fieldName = 'rating';

  @Input()
  min: number = 1;

  @Input()
  max: number = 5;

  hovered = 0;

  @Required
  @Input('ngModel')
  get value() {
    return this._value;
  }
  set value(value: number | string) {
    if (value === '') {
      this._value = '';
    } else {
      this.writeValue(value);
      this.valueChange.emit(this._value as number);
    }
  }

  @Output('ngModelChange')
  valueChange = new EventEmitter<number>();

  get values() {
    return Array(this.max).fill(0).map((_, i) => i + Math.max(this.min, 1));
  }

  // ===== FormControl
  onChange = (value: number) => { /* This is intentional */ };
  onTouched: any = () => { /* This is intentional */ };

  writeValue(value: string | number): void {
    value = typeof value === 'string' ? parseInt(value) : value;
    value = isNaN(value) ? this.min : value;
    this._value = Math.max(this.min, Math.min(value, this.max));
    this.onChange(this._value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  // /==== FormControl
}
