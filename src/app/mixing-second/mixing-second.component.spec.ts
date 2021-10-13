import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixingSecondComponent } from './mixing-second.component';

describe('MixingSecondComponent', () => {
  let component: MixingSecondComponent;
  let fixture: ComponentFixture<MixingSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixingSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixingSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
