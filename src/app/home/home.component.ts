import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contact: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts()
    .subscribe(contacts => this.contact = //contact or contacts?
    contacts.slice(1, 5));
  }

}
