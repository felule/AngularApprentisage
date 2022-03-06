import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilsUnComponent } from './fils-un.component';

describe('FilsUnComponent', () => {
  let component: FilsUnComponent;
  let fixture: ComponentFixture<FilsUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilsUnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilsUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
