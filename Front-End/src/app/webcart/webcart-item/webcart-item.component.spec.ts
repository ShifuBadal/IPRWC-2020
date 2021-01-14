import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcartItemComponent } from './webcart-item.component';

describe('WebcartItemComponent', () => {
  let component: WebcartItemComponent;
  let fixture: ComponentFixture<WebcartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
