import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgDraggableComponent } from './ng-draggable.component';


describe('NgDraggableComponent', () => {
  let component: NgDraggableComponent;
  let fixture: ComponentFixture<NgDraggableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDraggableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
