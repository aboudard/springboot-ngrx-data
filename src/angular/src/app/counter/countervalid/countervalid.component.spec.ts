import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CountervalidComponent } from './countervalid.component';

describe('CountervalidComponent', () => {
  let component: CountervalidComponent;
  let fixture: ComponentFixture<CountervalidComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountervalidComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountervalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
