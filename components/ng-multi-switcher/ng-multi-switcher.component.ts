import { Component, EventEmitter, Input, Output } from '@angular/core';
import { random } from 'src/utils/random';

export default interface SelectOption {
  id: string;
  text: string;
  disabled? : boolean;
}

@Component({
  selector: 'ng-multi-switcher',
  templateUrl: './ng-multi-switcher.component.html',
  styleUrls: ['./ng-multi-switcher.component.scss']
})
export class NgMultiSwitcherComponent {

  selected!: string;
  private unique = Math.floor(random() * 100).toString()

  @Input() items!: Array<SelectOption>;
  @Input() size!: string;

  @Input()
  set value(value: string) {
    this.selected = value;
  }
  get value() {
    return this.selected;
  }

  @Output() valueChange = new EventEmitter<string>();

  getItemId(index: number) {
    return 'item-' + index + '-' + this.unique;
  }

  isSelected(item: SelectOption) {
    return item.id === this.selected;
  }

  get btnGroupClass() {
    return {
      'btn-group-sm': this.size == 'sm'
    }
  }

  activate(item: SelectOption) {
    if (item.disabled) {
      return;
    }
    this.selected = item.id;
    this.valueChange.emit(this.selected);
  }
}
