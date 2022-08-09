import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsProductsComponent } from './brands-products.component';

describe('BrandsProductsComponent', () => {
  let component: BrandsProductsComponent;
  let fixture: ComponentFixture<BrandsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
