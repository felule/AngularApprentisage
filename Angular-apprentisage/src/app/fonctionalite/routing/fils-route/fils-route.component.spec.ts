import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilsRouteComponent } from './fils-route.component';

describe('FilsRouteComponent', () => {
  let component: FilsRouteComponent;
  let fixture: ComponentFixture<FilsRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilsRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
