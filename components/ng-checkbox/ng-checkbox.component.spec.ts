import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { NgCheckboxComponent } from "./ng-checkbox.component";

describe("NgCheckboxComponent", () => {
  let component: NgCheckboxComponent;
  let fixture: ComponentFixture<NgCheckboxComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgCheckboxComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });

  it("if icon undefined", () => {
    const checkbox: HTMLElement = fixture.nativeElement;
    const icon: HTMLElement | null = checkbox.querySelector('.custom-icon');
    expect(icon).toBeFalsy();
  });

  it('if icon defined', () => {
    component.icon = 'test';
    fixture.detectChanges();
    const checkbox: HTMLElement = fixture.nativeElement;
    const icon: HTMLElement | null = checkbox.querySelector('.custom-icon');
    expect(icon).toBeTruthy();
  });

  it('if disabled', () => {
    component.disabled = true;
    component.value = false;
    fixture.detectChanges();
    const checkbox: HTMLElement = fixture.nativeElement;
    checkbox.querySelector('input')?.click();
    fixture.detectChanges();
    expect(component.value).toBeFalse();
  });

  it('if not disabled', () => {
    component.disabled = false;
    component.value = false;
    fixture.detectChanges();
    const checkbox: HTMLElement = fixture.nativeElement;
    checkbox.querySelector('input')?.click();
    fixture.detectChanges();
    expect(component.value).toBeTrue();
  });

  it('should emit correct value', () => {
    component.value = false;
    component.valueChange.subscribe((value: boolean) => {
        expect(value).toEqual(true);
    });
    fixture.nativeElement.querySelector('label')?.click();
    fixture.detectChanges();
  });

  it('HTML checked property should has same vale of `value`', () => {
    component.value = true;
    fixture.detectChanges()
    const checked = fixture.nativeElement.querySelector('input').checked;
    expect(component.value).toEqual(checked);
  });

  it('when manualy change value shoul emit it', () => {
    spyOn(component.valueChange, 'emit');
    component.value = true;
    expect(component.valueChange.emit).toHaveBeenCalled();
  });
});
