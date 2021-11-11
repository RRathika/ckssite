import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumedetailComponent } from './resumedetail.component';

describe('ResumedetailComponent', () => {
  let component: ResumedetailComponent;
  let fixture: ComponentFixture<ResumedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
