import { TestBed } from '@angular/core/testing';

import { ContactFormConfigService } from './contact-form-config.service';

describe('ContactFormConfigService', () => {
  let service: ContactFormConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFormConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
