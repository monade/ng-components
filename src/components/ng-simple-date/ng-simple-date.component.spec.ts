import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { addDays } from "date-fns";
import { NgSimpleDate } from "./ng-simple-date.component";

describe("NgSimpleDate", () => {
  let component: NgSimpleDate;
  let fixture: ComponentFixture<NgSimpleDate>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [NgSimpleDate]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSimpleDate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('without arrow', () => {
    component.withArrows = false;
    fixture.detectChanges();
    const arrows: HTMLElement | null = (fixture.nativeElement as HTMLElement).querySelector('.arrow');
    expect(arrows).toBeFalsy();
  });

  it('with arrow', () => {
    component.withArrows = true;
    fixture.detectChanges()
    const arrows: HTMLElement | null = (fixture.nativeElement as HTMLElement).querySelector('.arrow');
    expect(arrows).toBeTruthy();
  });

  it('should add one day', () => {
    const today = new Date();
    component.withArrows = true;
    component.date = today;
    fixture.detectChanges();
    fixture.nativeElement.querySelectorAll(".arrow")[1].click();
    expect(component.date.toISOString()).toEqual(addDays(today, 1).toISOString());
  });

  it('should remove one day', () => {
    const today = new Date();
    component.withArrows = true;
    component.date = today;
    fixture.detectChanges();
    fixture.nativeElement.querySelectorAll('.arrow')[0].click();
    expect(component.date.toISOString()).toEqual(addDays(today, -1).toISOString());
  });
});
