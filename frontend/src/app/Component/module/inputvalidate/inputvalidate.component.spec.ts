import { ComponentFixture, TestBed } from '@angular/core/testing';

import InputvalidateComponent from './inputvalidate.component';

describe('InputvalidateComponent', () => {
  let component: InputvalidateComponent;
  let fixture: ComponentFixture<InputvalidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputvalidateComponent]
    });
    fixture = TestBed.createComponent(InputvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
