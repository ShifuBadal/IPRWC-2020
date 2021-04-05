import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageableProductComponent } from './manageable-product.component';

describe('ManageableProductComponent', () => {
  let component: ManageableProductComponent;
  let fixture: ComponentFixture<ManageableProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageableProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageableProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
