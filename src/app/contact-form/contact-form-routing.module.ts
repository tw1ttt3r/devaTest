import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentContactFormComponent } from './components/content-contact-form/content-contact-form.component';

const routes: Routes = [
  {
    path: '',
    component: ContentContactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactFormRoutingModule { }
