import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteemployeedetailsComponent } from './deleteemployeedetails.component';

describe('DeleteemployeedetailsComponent', () => {
  let component: DeleteemployeedetailsComponent;
  let fixture: ComponentFixture<DeleteemployeedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteemployeedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteemployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
