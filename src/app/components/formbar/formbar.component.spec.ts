import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbarComponent } from './formbar.component';

describe('FormbarComponent', () => {
  let component: FormbarComponent;
  let fixture: ComponentFixture<FormbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
