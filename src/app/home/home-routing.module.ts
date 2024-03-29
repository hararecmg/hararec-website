import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'home' },
    children: [
      // {
      //   path: 'login',
      //   component: LoginComponent
      // },
      // {
      //   path: 'registro',
      //   component: RegistroComponent
      // },
      // {
      //   path: '**',
      //   redirectTo: 'login'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
