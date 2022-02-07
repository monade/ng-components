import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'ng-test',
  templateUrl: './ng-test.component.html',
  styleUrls: ['./ng-test.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgTestComponent),
      multi: true
    }
  ]
})
export class NgTestComponent implements ControlValueAccessor {

  @Output() _onTouched: EventEmitter<any> = new EventEmitter();

  public ratings = [
    {
      stars: 1,
      text: 'must GTFO ASAP'
    },
    {
      stars: 2,
      text: 'meh'
    },
    {
      stars: 3,
      text: 'it\'s ok'
    },
    {
      stars: 4,
      text: 'I\'d be sad if a black hole ate it'
    },
    {
      stars: 5,
      text: '10/10 would write review on Amazon'
    }
  ]
  public disabled: boolean = false;
  public ratingText: string = "";
  public _value: number = 0;

  onChanged: any = () => { /* This is intentional */ };
  onTouched: any = () => { /* This is intentional */ };

  writeValue(val: number) {
    this._value = val;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn
  }
  registerOnTouched(fn: any) {
    this._onTouched.emit();
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onFocusOut() {
    this.onTouched();
  }

  setRating(star: any) {
    if(!this.disabled) {
      this._value = star.stars;
      this.ratingText = star.text
      this.onChanged(star.stars);
      this.onTouched();
    }
  }

}
