import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPages } from './product-pages.component';

describe('ProductPages', () => {
  let component: ProductPages;
  let fixture: ComponentFixture<ProductPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPages],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
