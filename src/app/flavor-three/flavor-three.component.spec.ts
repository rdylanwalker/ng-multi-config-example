import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorThreeComponent } from './flavor-three.component';

describe('FlavorThreeComponent', () => {
  let component: FlavorThreeComponent;
  let fixture: ComponentFixture<FlavorThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavorThreeComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
