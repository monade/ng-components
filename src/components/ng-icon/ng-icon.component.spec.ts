import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgIconComponent } from './ng-icon.component';


describe('NgIconComponent', () => {
  let component: NgIconComponent;
  let fixture: ComponentFixture<NgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load svg', () => {
    spyOn(component, 'getSvg').and.callFake(() => '<svg>test</svg>');
    fixture.detectChanges();
    component.ngAfterViewInit();
    const icon: HTMLElement = fixture.nativeElement.querySelector('span');
    const svg: SVGElement | null = icon.querySelector('svg');
    const text = svg?.textContent;
    expect(svg).toBeTruthy();
    expect(text).toEqual('test');
  });


});
