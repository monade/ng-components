import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResizeService } from 'src/services/resize.service';
import { NgSidebarItemComponent } from './ng-sidebar-item.component';

describe('NgSidebarItemComponent', () => {
  let component: NgSidebarItemComponent;
  let fixture: ComponentFixture<NgSidebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ NgSidebarItemComponent ],
      providers: [ResizeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
