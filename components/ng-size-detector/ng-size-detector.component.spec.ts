import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResizeService } from 'src/services/resize.service';
import { NgSizeDetectorComponent } from './ng-size-detector.component';

describe('NgSizeDetectorComponent', () => {
  let component: NgSizeDetectorComponent;
  let fixture: ComponentFixture<NgSizeDetectorComponent>;
  let resizeService: jasmine.SpyObj<ResizeService>

  beforeEach(async () => {
    const resizeServiceSpy = jasmine.createSpyObj('ResizeService', ['update'])
    await TestBed.configureTestingModule({
      declarations: [ NgSizeDetectorComponent ],
      providers: [
        { provide: ResizeService, useValue: resizeServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSizeDetectorComponent);
    component = fixture.componentInstance;
    resizeService = TestBed.inject(ResizeService) as jasmine.SpyObj<ResizeService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoul call resize update on resize event', () => {
    window.dispatchEvent(new Event('resize'));
    expect(resizeService.update).toHaveBeenCalled();
  });
});
