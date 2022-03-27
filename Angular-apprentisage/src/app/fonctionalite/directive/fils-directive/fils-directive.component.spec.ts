import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilsDirectiveComponent } from './fils-directive.component';

describe('FilsDirectiveComponent', () => {
  let component: FilsDirectiveComponent;
  let fixture: ComponentFixture<FilsDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilsDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilsDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
