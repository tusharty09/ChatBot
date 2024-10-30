import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotUIComponent } from './chatbot-ui.component';

describe('ChatbotUIComponent', () => {
  let component: ChatbotUIComponent;
  let fixture: ComponentFixture<ChatbotUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatbotUIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
