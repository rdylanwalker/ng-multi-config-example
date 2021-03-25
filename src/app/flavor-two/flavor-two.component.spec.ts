import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorTwoComponent } from './flavor-two.component';

describe('FlavorTwoComponent', () => {
  let component: FlavorTwoComponent;
  let fixture: ComponentFixture<FlavorTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavorTwoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
