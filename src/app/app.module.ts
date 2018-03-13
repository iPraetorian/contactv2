import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactService } from './contact.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';






@NgModule({

  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,

  ],
  declarations: [
    AppComponent,
    ContactsComponent,
    MessagesComponent,
    ContactDetailComponent,
    HomeComponent
  ],
  
  providers: [
    ContactService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
