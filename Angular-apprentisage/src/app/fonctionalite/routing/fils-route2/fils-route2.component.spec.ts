import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilsRoute2Component } from './fils-route2.component';

describe('FilsRoute2Component', () => {
  let component: FilsRoute2Component;
  let fixture: ComponentFixture<FilsRoute2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilsRoute2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilsRoute2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
