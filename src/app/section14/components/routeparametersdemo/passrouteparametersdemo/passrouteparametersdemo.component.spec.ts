import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassrouteparametersdemoComponent } from './passrouteparametersdemo.component';

describe('PassrouteparametersdemoComponent', () => {
  let component: PassrouteparametersdemoComponent;
  let fixture: ComponentFixture<PassrouteparametersdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassrouteparametersdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassrouteparametersdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
