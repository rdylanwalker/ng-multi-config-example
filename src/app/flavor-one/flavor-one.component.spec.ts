import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorOneComponent } from './flavor-one.component';

describe('FlavorOneComponent', () => {
  let component: FlavorOneComponent;
  let fixture: ComponentFixture<FlavorOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavorOneComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
