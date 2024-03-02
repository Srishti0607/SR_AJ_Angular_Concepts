import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowemployeedetailsComponent } from './showemployeedetails.component';

describe('ShowemployeedetailsComponent', () => {
  let component: ShowemployeedetailsComponent;
  let fixture: ComponentFixture<ShowemployeedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowemployeedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowemployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
