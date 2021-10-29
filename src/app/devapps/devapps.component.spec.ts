import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevappsComponent } from './devapps.component';

describe('DevappsComponent', () => {
  let component: DevappsComponent;
  let fixture: ComponentFixture<DevappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevappsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
