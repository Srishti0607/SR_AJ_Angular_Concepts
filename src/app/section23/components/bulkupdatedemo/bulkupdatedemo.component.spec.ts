import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkupdatedemoComponent } from './bulkupdatedemo.component';

describe('BulkupdatedemoComponent', () => {
  let component: BulkupdatedemoComponent;
  let fixture: ComponentFixture<BulkupdatedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkupdatedemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkupdatedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
