import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMessageComponent } from './popup-message.component';

describe('PopupMessageComponent', () => {
  let component: PopupMessageComponent;
  let fixture: ComponentFixture<PopupMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupMessageComponent]
    });
    fixture = TestBed.createComponent(PopupMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
