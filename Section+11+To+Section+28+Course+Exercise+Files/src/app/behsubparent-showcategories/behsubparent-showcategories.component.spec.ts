import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehsubparentShowcategoriesComponent } from './behsubparent-showcategories.component';

describe('BehsubparentShowcategoriesComponent', () => {
  let component: BehsubparentShowcategoriesComponent;
  let fixture: ComponentFixture<BehsubparentShowcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehsubparentShowcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehsubparentShowcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
