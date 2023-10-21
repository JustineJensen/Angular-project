import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QutoesComponent } from './qutoes.component';

describe('QutoesComponent', () => {
  let component: QutoesComponent;
  let fixture: ComponentFixture<QutoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QutoesComponent]
    });
    fixture = TestBed.createComponent(QutoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
