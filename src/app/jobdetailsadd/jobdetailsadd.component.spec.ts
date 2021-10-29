import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdetailsaddComponent } from './jobdetailsadd.component';

describe('JobdetailsaddComponent', () => {
  let component: JobdetailsaddComponent;
  let fixture: ComponentFixture<JobdetailsaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobdetailsaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobdetailsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
