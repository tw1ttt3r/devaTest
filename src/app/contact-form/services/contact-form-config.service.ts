import { Injectable, Optional } from '@angular/core';
import { ContactFormConfig } from '../types/contact-form-config.type';

@Injectable({
  providedIn: 'root'
})
export class ContactFormConfigService {

  private _urlService = '';

  constructor(@Optional() config?: ContactFormConfig) {
    if (config) { this._urlService = config.urlService}
  }

  get urlService(): string {
    return this._urlService;
  }

}
