import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgMultiSwitcherComponent } from "./ng-multi-switcher.component";
import SelectOption from "./ng-multi-switcher.component";

describe('NgMultiSwitcherComponent', () => {
  let component: NgMultiSwitcherComponent;
  let fixture: ComponentFixture<NgMultiSwitcherComponent>;
  let options: Array<SelectOption> = [
    {
      id: '0',
      text: 'test 1',
    },
    {
      id: '1',
      text: 'test 2',
    },
    {
      id: '2',
      text: 'test 3',
    },
    {
      id: '3',
      text: 'test 4',
      disabled: true
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMultiSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMultiSwitcherComponent);
    component = fixture.componentInstance;
    component.items = options;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be correctly selected', () => {
    component.value = options[1].id;
    fixture.detectChanges();
    expect(component.selected).toEqual(options[1].id);
    expect(component.isSelected(options[1])).toBeTrue();
  });

  it("should be changeable", () => {
    spyOn(component.valueChange, 'emit');
    fixture.nativeElement.querySelectorAll('label')[2].click();
    fixture.detectChanges();
    expect(component.selected).toEqual(options[2].id);
    expect(component.valueChange.emit).toHaveBeenCalled();
  });

  it("should be disabled", () => {
    component.value = options[0].id;
    fixture.detectChanges();
    fixture.nativeElement.querySelectorAll('label')[3].click();
    expect(component.selected).toEqual(options[0].id);
  });
});
