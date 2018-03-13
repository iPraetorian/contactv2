import { Injectable } from '@angular/core';
import { Contact } from '../contact';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ContactService {

  //URL to web api
  private contactsUrl = '/api/contacts';

  //constructor(private messageService: MessageService) { } OLD SERVICE INJECTION
  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}


//**log a ContactService message with the MessageService */
    private log(message: string) {
      this.messageService.add('ContactService:'+ message);
    }

//**GET contacts from server */
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl)
      .pipe(
        catchError(this.handleError('getContacts',[]))
      );
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error:any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

   /* getContact(id: number ): Observable<Contact> {
    this.messageService.add ('ContactService: fetched contact name=${name}');
    return of (CONTACTS.find(contact =>contact.id ===id));
  } */
} 
