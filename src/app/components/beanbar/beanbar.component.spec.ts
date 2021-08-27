import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanbarComponent } from './beanbar.component';

describe('BeanbarComponent', () => {
  let component: BeanbarComponent;
  let fixture: ComponentFixture<BeanbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeanbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeanbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
