import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingngforwithformelementsComponent } from './usingngforwithformelements.component';

describe('UsingngforwithformelementsComponent', () => {
  let component: UsingngforwithformelementsComponent;
  let fixture: ComponentFixture<UsingngforwithformelementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingngforwithformelementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingngforwithformelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
