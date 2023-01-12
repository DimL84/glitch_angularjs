import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInternComponent } from './chat-intern.component';

describe('ChatInternComponent', () => {
  let component: ChatInternComponent;
  let fixture: ComponentFixture<ChatInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatInternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
