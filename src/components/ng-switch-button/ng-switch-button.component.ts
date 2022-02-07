import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-switch-button',
  templateUrl: './ng-switch-button.component.html',
  styleUrls: ['./ng-switch-button.component.scss']
})
export class NgSwitchButtonComponent implements OnInit {

  private _value!: boolean;
  selected!: boolean;

  @Input()
  set value(value: boolean) {
    this._value = value;
    this.selected = value;
  }
  get value() {
    return this._value;
  }

  @Output() valueChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.selected = this.value;
  }

  get buttonClass() {
    return {
      'v-switch-button--selected': this.selected
    };
  }

  toggle() {
    this.selected = !this.selected;
    this.valueChange.emit(this.selected);
  }
}
