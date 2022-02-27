import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAngularComponent } from './base-angular.component';

describe('BaseAngularComponent', () => {
  let component: BaseAngularComponent;
  let fixture: ComponentFixture<BaseAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
