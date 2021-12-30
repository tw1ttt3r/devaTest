import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormRoutingModule } from './contact-form-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContactFormConfigService } from './services/contact-form-config.service';
import { ContactFormConfig } from './types/contact-form-config.type';
import { ContentContactFormComponent } from './components/content-contact-form/content-contact-form.component';
import { SendInfoService } from './services/send-info.service';



@NgModule({
  declarations: [
    ContactFormComponent,
    ContentContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactFormRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [ContactFormComponent],
  providers: [SendInfoService]
})
export class ContactFormModule {
  static forRoot(config: ContactFormConfig): ModuleWithProviders<ContactFormModule> {
    return {
      ngModule: ContactFormModule,
      providers: [
        {
          provide: ContactFormConfigService,
          useValue: config
        }
      ]
    }
  }
}
