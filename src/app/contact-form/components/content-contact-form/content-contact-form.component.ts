import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-content-contact-form',
  templateUrl: './content-contact-form.component.html',
  styleUrls: ['./content-contact-form.component.scss']
})
export class ContentContactFormComponent {

  maxCharsMessages: number = environment.max_characters_message;

  constructor() { }

}
