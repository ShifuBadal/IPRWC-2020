import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageableProductListComponent } from './manageable-product-list.component';

describe('ManageableProductListComponent', () => {
  let component: ManageableProductListComponent;
  let fixture: ComponentFixture<ManageableProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageableProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageableProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
