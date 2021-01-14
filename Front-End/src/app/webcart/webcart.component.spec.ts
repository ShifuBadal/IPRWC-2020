import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcartComponent } from './webcart.component';

describe('WebcartComponent', () => {
  let component: WebcartComponent;
  let fixture: ComponentFixture<WebcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
