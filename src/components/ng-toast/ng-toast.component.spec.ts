import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgToastComponent } from './ng-toast.component';
import { ToastrService } from "ngx-toastr";
import { ComponentsService, TOAST_TYPE, ToastMessage } from "../components.service";

describe('NgToastComponent', () => {
  let component: NgToastComponent;
  let fixture: ComponentFixture<NgToastComponent>;
  let toastrService: jasmine.SpyObj<ToastrService>;
  let componentsService: ComponentsService;

  beforeEach(async () => {    
    const toastrSpy = jasmine.createSpyObj('ToastrService', ['success', 'error', 'warning']);
    await TestBed.configureTestingModule({
      declarations: [ NgToastComponent ],
      providers: [ ComponentsService, {provide: ToastrService, useValue: toastrSpy} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgToastComponent);
    component = fixture.componentInstance;
    componentsService = TestBed.inject(ComponentsService);
    toastrService = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open success toast', () => {
    const message: ToastMessage = {
      type: TOAST_TYPE.SUCCESS,
      message: 'success'
    }
    componentsService.showToastMessage(message);
    fixture.detectChanges();
    expect(toastrService.success).toHaveBeenCalled();
  });

  it('should open warning toast', () => {
    const message: ToastMessage = {
      type: TOAST_TYPE.WARNING,
      message: 'success'
    }
    componentsService.showToastMessage(message);
    fixture.detectChanges();
    expect(toastrService.warning).toHaveBeenCalled();
  });

  it('should open error toast', () => {
    const message: ToastMessage = {
      type: TOAST_TYPE.ERROR,
      message: 'success'
    }
    componentsService.showToastMessage(message);
    fixture.detectChanges();
    expect(toastrService.error).toHaveBeenCalled();
  }); 
});
