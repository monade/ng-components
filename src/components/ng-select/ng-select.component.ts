import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface VSelectOption {
  id: string;
  text: string;
  editable?: boolean;
  new?: boolean;
}

@Component({
  selector: 'ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => NgSelectComponent)
  }]
})
export class NgSelectComponent implements OnInit, ControlValueAccessor, OnChanges {

  private _options: VSelectOption[] = [];
  private _term = "";
  private _value = "";

  @Input() hasError = false;
  @Input() hasRequiredError = false;

  @Input('ngModel')
  set value(value: string) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  @Output('ngModelChange') valueChange = new EventEmitter<string>();

  @Input()
  set options(value: VSelectOption[]) {
    this._options = value;
  }
  get options() {
    return this._options;
  }

  @Input() labelText = "";
  @Input() placeholder = "Seleziona un'opzione";
  @Input() searchPlaceholder = "Cerca...";
  @Input() required = false;
  @Input() emptyPlaceholder = "Nessun risultato...";
  @Input() addable = false;
  @Input() editable = false;
  @Input() expanded = false;
  @Input() autoSort = true;
  @Input() addableAlign = "top";
  @Input() disabled = false;
  @Input() scrollable = true;
  @Input() searchable = false;
  @Input() loading = false;
  @Input() sizeClass = "";

  @Output() searchChanged = new EventEmitter<string>();
  @Output() input = new EventEmitter<string>();
  @Output() added = new EventEmitter<VSelectOption>();
  @Output() edited = new EventEmitter<VSelectOption>();

  @ViewChild('input') inputElement: any;
  @ViewChild('dropdown') dropdownElement: any;
  @ViewChild('editInput') editInputElement: any;

  ngOnChanges(changes: SimpleChanges) {
    if ('options' in changes) {
      this.selectableOptions = [...this._options];

      this.updateSelected();
    }

    if ('value' in changes) {
      this.updateSelected();
    }
  }

  // ===== FormControl
  onChange = (value: string) => { /* This is intentional */ };
  onTouched: any = () => { /* This is intentional */ };

  writeValue(value: string): void {
    this._value = value;
    this.updateSelected();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  // /==== FormControl

  ngOnInit(): void {
    this.updateSelected();
  }

  set term(term: string) {
    this._term = term;
    this.searchChanged.emit(term);
  }
  get term(): string {
    return this._term;
  }

  dropdownVisible = false;
  editing: VSelectOption | null = null;

  selected: VSelectOption | null = null;
  selectableOptions: VSelectOption[] = [];

  adding = {
    enabled: false,
    text: ""
  };

  get showDropdown() {
    return this.dropdownVisible || this.expanded;
  }

  get label(): string {
    if (this.selected === null) {
      if (this.loading) {
        return "Loading ...";
      }
      return this.placeholder || "";
    }

    return this.selected.text;
  }

  updateSelected() {
    if (this.value === null) {
      this.selected = null;
    } else {
      this.selected = this.selectableOptions.find(element => element.id === this.value) || null;
    }
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  closeDropdown() {
    this.dropdownVisible = false;
  }

  select(option: VSelectOption) {
    this.selected = option;
    this.closeDropdown();
    this.onChange(this.selected.id);
    this.valueChange.emit(this.selected.id);
  }

  add() {
    if (this.adding.text === "") {
      return;
    }

    const option: VSelectOption = {
      id: `new_${this.selectableOptions.length + 1}`,
      text: this.adding.text,
      new: true
    };

    if (this.editable) {
      option.editable = true;
    }

    this.selectableOptions.push(option);
    this.sortOptions();

    this.selected = option;

    this.stopAdding();
    this.closeDropdown();

    this.added.emit(option);
  }

  startAdding() {
    this.adding.enabled = true;
    this.inputElement.focus();
  }

  stopAdding() {
    this.adding.enabled = false;
    this.adding.text = "";
  }

  edit() {
    this.closeDropdown();
    this.edited.emit(this.editing ? this.editing : { id: '', text: '' });
    this.stopEditing();
  }

  startEditing(option: VSelectOption) {
    this.editing = option;
    (this.editInputElement as any)[0]?.focus();
  }

  stopEditing() {
    this.editing = null;
  }

  sortOptions() {
    if (!this.autoSort) {
      return;
    }
    this.selectableOptions.sort((a: VSelectOption, b: VSelectOption) => {
      if (a.text.toLowerCase() < b.text.toLowerCase()) {
        return -1;
      } else if (a.text.toLowerCase() > b.text.toLowerCase()) {
        return 1;
      }

      return 0;
    });
  }

  isSelected(option: VSelectOption) {
    if (this.selected === null) {
      return false;
    }

    return this.selected.id === option.id;
  }


}
