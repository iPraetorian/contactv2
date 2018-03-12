import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';
import { MessageService } from './message.service';
import { RouterTestingModule } from '@angular/router/testing';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
      
      declarations: [
        AppComponent,
        ContactsComponent,
        MessagesComponent,
        ContactDetailComponent
       
      ],
      providers: [ContactService, MessageService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Contacts'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Contacts');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Contacts!');
  }));
});
