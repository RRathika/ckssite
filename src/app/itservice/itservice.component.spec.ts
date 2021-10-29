import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItserviceComponent } from './itservice.component';

describe('ItserviceComponent', () => {
  let component: ItserviceComponent;
  let fixture: ComponentFixture<ItserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
