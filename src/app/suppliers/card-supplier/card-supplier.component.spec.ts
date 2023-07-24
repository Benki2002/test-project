import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSupplierComponent } from './card-supplier.component';

describe('CardSupplierComponent', () => {
  let component: CardSupplierComponent;
  let fixture: ComponentFixture<CardSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
