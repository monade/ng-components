import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ModalService } from "./modal.service";
import { NgModalComponent } from './ng-modal.component';
import { ResizeService } from '../../../services/resize.service';

describe("NgModalComponent", () => {
  let component: NgModalComponent;
  let fixture: ComponentFixture<NgModalComponent>;
  let modalService: ModalService;
  let resizeServiceStub: Partial<ResizeService>
  let resizeService: Partial<ResizeService>

  beforeEach(waitForAsync(() => {
    resizeServiceStub = {
      isMobile: false
    }
    TestBed.configureTestingModule({
      declarations: [NgModalComponent],
      providers: [ ModalService, { provide: ResizeService, useValue: resizeServiceStub } ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModalComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(ModalService);
    resizeService = TestBed.inject(ResizeService);
    component.id = 'test';
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });

  it('should be close on init', () => {
    const modal: HTMLElement = fixture.nativeElement;
    expect(modal.style.display).toEqual('none');
  });

  it('should be openable', () => {
    spyOn(component.opened, 'emit');
    const modal: HTMLElement = fixture.nativeElement;
    component.open();
    fixture.detectChanges();
    expect(component.opened.emit).toHaveBeenCalled();
    expect(modal.style.display).toEqual('block');
    expect(document.body.classList).toContain('modal-open')
  });

  it('should be closable', () => {
    component.open();
    fixture.detectChanges();

    spyOn(component.closeEvent, 'emit');
    const modal: HTMLElement = fixture.nativeElement;
    component.close();
    fixture.detectChanges();
    expect(component.closeEvent.emit).toHaveBeenCalled();
    expect(modal.style.display).toEqual("none");
    expect(document.body.classList).not.toContain("modal-open");
  });
  
  it('should close on back click', () => {
    component.open();
    fixture.detectChanges();

    spyOn(component.closeEvent, 'emit');
    const modal: HTMLElement = fixture.nativeElement;
    (modal.querySelector(".modal-container") as HTMLElement).click();
    fixture.detectChanges();
    expect(component.closeEvent.emit).toHaveBeenCalled();
    expect(modal.style.display).toEqual("none");
    expect(document.body.classList).not.toContain("modal-open");
  });

  it('should be openable from ModalService', () => {
    spyOn(component.opened, "emit");
    const modal: HTMLElement = fixture.nativeElement;
    modalService.open('test');
    fixture.detectChanges();
    expect(component.opened.emit).toHaveBeenCalled();
    expect(modal.style.display).toEqual("block");
    expect(document.body.classList).toContain("modal-open");
  });
});
