import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/vista1',
    pathMatch: 'full'
  },
  {
    path: 'vista1',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'vista2',
    loadChildren: () => import('./contact-form/contact-form.module').then(m => m.ContactFormModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
