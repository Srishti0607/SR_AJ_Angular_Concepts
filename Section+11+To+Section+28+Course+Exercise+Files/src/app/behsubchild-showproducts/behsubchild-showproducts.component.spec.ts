import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehsubchildShowproductsComponent } from './behsubchild-showproducts.component';

describe('BehsubchildShowproductsComponent', () => {
  let component: BehsubchildShowproductsComponent;
  let fixture: ComponentFixture<BehsubchildShowproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehsubchildShowproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehsubchildShowproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
