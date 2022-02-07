import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResizeService } from 'src/services/resize.service';
import { NgSpinnerComponent } from './ng-spinner.component';


describe('NgSpinnerComponent', () => {
  let component: NgSpinnerComponent;
  let fixture: ComponentFixture<NgSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSpinnerComponent ],
      providers: [
        ResizeService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
