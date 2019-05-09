import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFiguresComponent } from './key-figures.component';

describe('KeyFiguresComponent', () => {
  let component: KeyFiguresComponent;
  let fixture: ComponentFixture<KeyFiguresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyFiguresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
