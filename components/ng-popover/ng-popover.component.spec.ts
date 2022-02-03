import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgPopoverComponent } from './ng-popover.component';


describe('NgPopoverComponent', () => {
  let component: NgPopoverComponent;
  let fixture: ComponentFixture<NgPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
