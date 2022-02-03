import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { NgButtonIconComponent } from "./ng-button-icon.component";

describe("NgButtonIconComponent", () => {
  let component: NgButtonIconComponent;
  let fixture: ComponentFixture<NgButtonIconComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgButtonIconComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgButtonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });
});
