import { Options } from "@angular-slider/ngx-slider";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-slider',
  templateUrl: './ng-slider.component.html',
  styleUrls: ['./ng-slider.component.scss']
})
export class NgSliderComponent implements OnInit {

  @Input() minValue!: number;
  @Input() maxValue!: number;

  @Input() options!: Options;

  @Output() minValueChange = new EventEmitter<number>();
  @Output() maxValueChange = new EventEmitter<number>();

  private _minInput: string | undefined = '';
  private _maxInput: string | undefined = '';

  get min() {
    return this.minValue;
  }

  set min(value: number) {
    if (value === this.minValue) {
      return;
    }
    this.minValue = value;
    this._minInput = value.toString();
    this.minValueChange.emit(value);
  }

  get max() {
    return this.maxValue;
  }

  set max(value: number) {
    if (value === this.maxValue) {
      return;
    }

    this.maxValue = value;
    this._maxInput = value.toString();
    this.maxValueChange.emit(value);
  }

  get minInput() {
    return this._minInput;
  }

  set minInput(value: string | undefined) {
    this._minInput = value;
    if (!isNaN(this._minInput as any)) {
      const intValue = parseInt(this._minInput!);
      this.min = this.validate(intValue, this.min);
    }
  }

  get maxInput() {
    return this._maxInput;
  }

  set maxInput(value: string | undefined) {
    this._maxInput = value;
    if (!isNaN(this._maxInput as any)) {
      const intValue = parseInt(this._maxInput!);
      this.max = this.validate(intValue, this.max);
    }
  }

  get maxAllowed() {
    return 'ceil' in this.options ? this.options.ceil! : Number.MAX_SAFE_INTEGER;
  }

  get minAllowed() {
    return 'floor' in this.options ? this.options.floor! : Number.MIN_SAFE_INTEGER;
  }

  get isMinInvalid() {
    const value = parseInt(this._minInput ?? '');
    return value < this.minAllowed || value > this.maxAllowed;
  }

  get isMaxInvalid() {
    const value = parseInt(this._maxInput ?? '');
    return value < this.minAllowed || value > this.maxAllowed;
  }

  validate(value: number, original: number) {
    if (value >= this.minAllowed) {
      return Math.min(value, this.maxAllowed);
    }
    if (value <= this.maxAllowed) {
      return Math.max(value, this.minAllowed);
    }
    return original;
  }
  
  resetInputs() {
    this._maxInput = this.max.toString();
    this._minInput = this.min.toString();
  }

  ngOnInit(): void {
    this.resetInputs();
  }
}
