import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgSliderComponent } from './ng-slider.component';

describe('NgSliderComponent', () => {
  let component: NgSliderComponent;
  let fixture: ComponentFixture<NgSliderComponent>;

  let minValue: number = 10;
  let maxValue: number = 30;
  let options = {
      ceil: 100,
      floor: 0
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSliderComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSliderComponent);
    component = fixture.componentInstance;
    component.minValue = minValue;
    component.maxValue = maxValue;
    component.options = options;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should insert min value', async () => {
    spyOn(component.minValueChange, 'emit');
    await fixture.whenStable().then(() => {
      const input = fixture.nativeElement.querySelectorAll('input')[0];
      input.value = '20';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.min).toEqual(20);
      expect(component.minValueChange.emit).toHaveBeenCalled();
    });
  });

  it('should insert max value', async () => {
    spyOn(component.maxValueChange, 'emit');
    await fixture.whenStable().then(() => {
      const input = fixture.nativeElement.querySelectorAll('input')[1];
      input.value = '40';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.max).toEqual(40);
      expect(component.maxValueChange.emit).toHaveBeenCalled();
    });
  });

  it('should validate correctly', async () => {
    await fixture.whenStable().then(() => {
      const input1 = fixture.nativeElement.querySelectorAll("input")[0];
      input1.value = "-20";
      input1.dispatchEvent(new Event("input"));
      const input2 = fixture.nativeElement.querySelectorAll("input")[1];
      input2.value = "110";
      input2.dispatchEvent(new Event("input"));
      fixture.detectChanges();
      expect(component.minValue).toEqual(0);
      expect(component.maxValue).toEqual(100);
    });
  });
});
