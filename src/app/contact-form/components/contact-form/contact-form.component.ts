import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendInfoService } from '../../services/send-info.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Input() maxCharsMessage: number = 0;
  @Output() statusForm = new EventEmitter<{ status: boolean }>()
  @Output() sendInfo = new EventEmitter<{ status: boolean }>()
  contacForm: FormGroup;
  maxPhoneCharacters: number = 13;
  patterName: string = '^[a-zA-Z0-9Ññáéíóú ]+$';
  patterPhone: string = `^[+][0-9]{${this.maxPhoneCharacters}}$`;
  placeholderMessage: string = ``;
  
  constructor(private sendInfoService: SendInfoService) { }
  
  ngOnInit(): void {
    this.placeholderMessage = `Máximo de caracteres permitidos: ${this.maxCharsMessage}`;
    this.contacForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.patterName)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.patterPhone)])),
      message: new FormControl('', Validators.maxLength(this.maxCharsMessage)),
    });

    this.contacForm.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.statusForm.emit({ status: true });
      }
  })
  }

  onSubmit(): void {
    if (this.contacForm.status === 'VALID') {
      this.sendInfoService.saveData(this.contacForm.value);
      this.sendInfo.emit({ status: true });
    }
  }

}
