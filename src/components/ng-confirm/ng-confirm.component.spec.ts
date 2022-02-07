import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmService, ConfirmData } from './confirm.service';
import { NgConfirmComponent } from './ng-confirm.component';
import { ModalService } from '../ng-modal/modal.service';


describe('NgConfirmComponent', () => {
  let component: NgConfirmComponent;
  let fixture: ComponentFixture<NgConfirmComponent>;
  let confirmService: ConfirmService;
  let modalService: jasmine.SpyObj<ModalService>;

  beforeEach(async () => {
    const modalServiceSpy = jasmine.createSpyObj('ModalService', ['open', 'close']);

    await TestBed.configureTestingModule({
      declarations: [ NgConfirmComponent ],
      providers: [ConfirmService, { provide: ModalService, useValue: modalServiceSpy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgConfirmComponent);
    component = fixture.componentInstance;
    confirmService = TestBed.inject(ConfirmService);
    modalService = TestBed.inject(ModalService) as jasmine.SpyObj<ModalService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be openable', () => {
    const data: ConfirmData = {
      title: 'test',
      content: 'test'
    }
    confirmService.show(data);
    expect(modalService.open).toHaveBeenCalled();
  });

  it('should be closabe', () => {
    component.confirm();
    expect(modalService.close).toHaveBeenCalled();
  });
});
