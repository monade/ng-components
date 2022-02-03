import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { NgTimeRangeComponent, TimeRange } from "./ng-time-range.component";

describe("NgTimeRangeComponent", () => {
  let component: NgTimeRangeComponent;
  let fixture: ComponentFixture<NgTimeRangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [ NgTimeRangeComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const timeRange: TimeRange = {
        startHour: 23,
        startMinutes: 55,
        endHour: 0,
        endMinutes: 0
    }
    fixture = TestBed.createComponent(NgTimeRangeComponent);
    component = fixture.componentInstance;
    component.timeRange = timeRange;
    fixture.detectChanges();
  });

  it('withoud dates', () => {
    const el = fixture.nativeElement;
    const datesEl: HTMLElement | null = el.querySelector('.custom-date-picker');
    expect(datesEl).toBeFalsy();
  });

  it('with dates', () => {
    component.showDates = true;
    fixture.detectChanges();
    const el = fixture.nativeElement;
    const datesEl: HTMLElement | null = el.querySelector('.custom-date-picker');
    expect(datesEl).toBeTruthy();
  });

  it('should be today', () => {
    const day = new Date('11-4-2022');
    const timeRange: TimeRange = {
      startHour: 10,
      startMinutes: 0,
      endHour: 12,
      endMinutes: 0,
      startDate: day
    };
    component.timeRange = timeRange;
    fixture.detectChanges();
    expect(component.timeRange.startDate?.toISOString()).toEqual(day.toISOString())
  });

  it('should increase start hour', () => {
    fixture.nativeElement.querySelectorAll('.arrow-icon')[0].click();
    fixture.detectChanges();
    expect(component.startHour).toEqual(0);
  });

  it('should decrease start hour', () => {
    fixture.nativeElement.querySelectorAll('.arrow-icon')[1].click();
    fixture.detectChanges();
    expect(component.startHour).toEqual(22);
  });

  it('should increase start minute', () => {
    fixture.nativeElement.querySelectorAll('.arrow-icon')[2].click();
    fixture.nativeElement.querySelectorAll('.arrow-icon')[2].click();
    fixture.detectChanges();
    expect(component.startMinutes).toEqual(25);
    expect(component.startHour).toEqual(0)
  });

  it('should decrease start minute', () => {
    fixture.nativeElement.querySelectorAll(".arrow-icon")[3].click();
    fixture.detectChanges();
    expect(component.startMinutes).toEqual(40)
  });

  it('should increase end hour', () => {
    fixture.nativeElement.querySelectorAll('.arrow-icon')[4].click();
    fixture.detectChanges();
    expect(component.endHour).toEqual(1);
  });

  it('should decrease end hour', () => {
    fixture.nativeElement.querySelectorAll('.arrow-icon')[5].click();
    fixture.detectChanges();
    expect(component.endHour).toEqual(23);
  });

  it('should increase end minute', () => {
    fixture.nativeElement.querySelectorAll('.arrow-icon')[6].click();
    fixture.detectChanges();
    expect(component.endMinutes).toEqual(15);
  });

  it('should increase end minute next hour', () => {
    component.timeRange = {
      startHour: 10,
      endHour: 12,
      startMinutes: 0,
      endMinutes: 55
    }
    fixture.detectChanges();
    fixture.nativeElement.querySelectorAll('.arrow-icon')[6].click();
    fixture.nativeElement.querySelectorAll('.arrow-icon')[6].click();
    expect(component.endMinutes).toEqual(25);
    expect(component.endHour).toEqual(13);
  });

  it('should decrease end minute', () => {
    fixture.nativeElement.querySelectorAll('.arrow-icon')[7].click();
    fixture.detectChanges();
    expect(component.endMinutes).toEqual(45);
    expect(component.endHour).toEqual(23);
  });

  it('should emit the new value', () => {
    spyOn(component.timeRangeChange, 'emit');
    component.onStartHourIncrease();
    fixture.detectChanges();
    expect(component.timeRangeChange.emit).toHaveBeenCalled();
  });

  it('should be disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    fixture.nativeElement.querySelectorAll('.arrow-icon')[0].click();
    expect(component.startHour).toEqual(23);
  });

});
