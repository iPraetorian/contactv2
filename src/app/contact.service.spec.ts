import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { MessageService } from './message.service';



describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService, MessageService ]
    });
  });

  it('should be created', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});
