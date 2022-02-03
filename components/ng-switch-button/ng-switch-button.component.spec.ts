import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSwitchButtonComponent } from './ng-switch-button.component';


describe('NgSwitchButtonComponent', () => {
  let component: NgSwitchButtonComponent;
  let fixture: ComponentFixture<NgSwitchButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchButtonComponent);
    component = fixture.componentInstance;
    component.value = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle', () => {
    spyOn(component.valueChange, 'emit');
    fixture.nativeElement.querySelector(".v-switch-button-wrapper").click();
    fixture.detectChanges();
    expect(component.valueChange.emit).toHaveBeenCalled();
    expect(component.selected).toBeTrue();
  });
});
