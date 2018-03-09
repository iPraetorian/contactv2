import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../mock-contacts';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service'

@Injectable()
export class ContactService {

  constructor(private messageService: MessageService) { }

  getContacts(): Observable<Contact[]> {
//Todo: send the message _after_ fetching the contacts
    this.messageService.add('ContactService: fetched contacts');
    return of (CONTACTS);
  }
}
