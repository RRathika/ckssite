import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobnameaddComponent } from './jobnameadd.component';

describe('JobnameaddComponent', () => {
  let component: JobnameaddComponent;
  let fixture: ComponentFixture<JobnameaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobnameaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobnameaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
