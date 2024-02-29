import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertnewemployeeComponent } from './insertnewemployee.component';

describe('InsertnewemployeeComponent', () => {
  let component: InsertnewemployeeComponent;
  let fixture: ComponentFixture<InsertnewemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertnewemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertnewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
