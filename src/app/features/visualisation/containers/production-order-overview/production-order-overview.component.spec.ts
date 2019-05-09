import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrderOverviewComponent } from './production-order-overview.component';

describe('ProductionOrderOverviewComponent', () => {
  let component: ProductionOrderOverviewComponent;
  let fixture: ComponentFixture<ProductionOrderOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionOrderOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionOrderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
