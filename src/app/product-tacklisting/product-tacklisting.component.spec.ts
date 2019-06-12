import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTacklistingComponent } from './product-tacklisting.component';

describe('ProductTacklistingComponent', () => {
  let component: ProductTacklistingComponent;
  let fixture: ComponentFixture<ProductTacklistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTacklistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTacklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
