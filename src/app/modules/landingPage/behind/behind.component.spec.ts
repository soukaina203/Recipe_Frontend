import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehindComponent } from './behind.component';

describe('BehindComponent', () => {
  let component: BehindComponent;
  let fixture: ComponentFixture<BehindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehindComponent]
    });
    fixture = TestBed.createComponent(BehindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
