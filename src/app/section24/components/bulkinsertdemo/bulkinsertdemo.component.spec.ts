import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkinsertdemoComponent } from './bulkinsertdemo.component';

describe('BulkinsertdemoComponent', () => {
  let component: BulkinsertdemoComponent;
  let fixture: ComponentFixture<BulkinsertdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkinsertdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkinsertdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
