import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactFormData } from '../types/contact-form-data.type';
import { ContactFormConfigService } from './contact-form-config.service';

@Injectable({
  providedIn: 'root'
})
export class SendInfoService {

  constructor(private contactFormConfig: ContactFormConfigService, private http: HttpClient) { }

  saveData(data: ContactFormData) {
    return this.http.post(this.contactFormConfig.urlService, data);
  }

}
