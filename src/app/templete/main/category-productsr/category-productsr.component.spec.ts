import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductsrComponent } from './category-productsr.component';

describe('CategoryProductsrComponent', () => {
  let component: CategoryProductsrComponent;
  let fixture: ComponentFixture<CategoryProductsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProductsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
