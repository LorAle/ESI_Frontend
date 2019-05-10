import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrderTableComponent } from './production-order-table.component';

describe('ProductionOrderTableComponent', () => {
  let component: ProductionOrderTableComponent;
  let fixture: ComponentFixture<ProductionOrderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionOrderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
