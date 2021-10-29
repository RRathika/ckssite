import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobnamelistComponent } from './jobnamelist.component';

describe('JobnamelistComponent', () => {
  let component: JobnamelistComponent;
  let fixture: ComponentFixture<JobnamelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobnamelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobnamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
