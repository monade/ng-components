import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { random } from 'src/utils/random';

export interface CheckboxItem {
  id: string;
  label: string;
  selected: boolean;
  icon?: string;
}

@Component({
  selector: 'ng-checkbox',
  templateUrl: './ng-checkbox.component.html',
  styleUrls: ['./ng-checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => NgCheckboxComponent)
  }]
})
export class NgCheckboxComponent implements OnInit, ControlValueAccessor {

  private _value!: boolean;

  public id = '';

  @Input() icon: string | undefined = undefined;
  @Input() disabled: boolean = false;

  @Input()
  set value(value: boolean) {
    this._value = value;
    this.valueChange.emit(this._value);
  }
  get value() {
    return this._value;
  }

  @Output()
  valueChange = new EventEmitter();

  ngOnInit(): void {
    this.id = this.getId();
  }

  private getId() {
    return "checkbox-" + this.randomValue();
  }

  private randomValue() {
    return random()
        .toString(36)
        .substr(2, 9);
  }

  // ===== FormControl
  onChange(selected: boolean) {
    this.value = selected;
    this.valueChange.emit(selected);
  }
  writeValue(value: boolean): void {
    this._value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void { /* This is intentional */ }
  // /==== FormControl
}
