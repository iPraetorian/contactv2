import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../contact';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  
  @Input() contact: Contact;



  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location
  ) { }

  ngOnInit() {
  }

}
