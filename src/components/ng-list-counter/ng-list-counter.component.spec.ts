import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgListCounterComponent } from './ng-list-counter.component';


describe('NgSelectComponent', () => {
  let component: NgListCounterComponent;
  let fixture: ComponentFixture<NgListCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgListCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgListCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
