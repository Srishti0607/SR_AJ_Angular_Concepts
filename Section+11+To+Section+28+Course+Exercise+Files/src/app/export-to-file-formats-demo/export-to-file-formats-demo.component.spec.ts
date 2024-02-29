import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportToFileFormatsDemoComponent } from './export-to-file-formats-demo.component';

describe('ExportToFileFormatsDemoComponent', () => {
  let component: ExportToFileFormatsDemoComponent;
  let fixture: ComponentFixture<ExportToFileFormatsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportToFileFormatsDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportToFileFormatsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
