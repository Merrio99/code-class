import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEmployeeComponent } from './from-employee.component';

describe('FromEmployeeComponent', () => {
  let component: FromEmployeeComponent;
  let fixture: ComponentFixture<FromEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
