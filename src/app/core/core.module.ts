import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ContactFormModule } from '../contact-form/contact-form.module';
import { CoreRoutingModule } from './core-routing.module';
import { environment } from '../../environments/environment';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    ContactFormModule.forRoot({ urlService: environment.url_service_post })
  ],
  exports: [WelcomeComponent]
})
export class CoreModule { }
