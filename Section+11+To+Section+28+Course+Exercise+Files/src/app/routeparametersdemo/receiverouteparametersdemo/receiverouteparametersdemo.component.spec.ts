import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverouteparametersdemoComponent } from './receiverouteparametersdemo.component';

describe('ReceiverouteparametersdemoComponent', () => {
  let component: ReceiverouteparametersdemoComponent;
  let fixture: ComponentFixture<ReceiverouteparametersdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverouteparametersdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverouteparametersdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
