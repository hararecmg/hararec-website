import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUnderDevelopmentComponent } from '../shared/components/page-under-development/page-under-development.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: { title: 'about' },
    children: [
      {
        path: ':occupation/:option',
        component: PageUnderDevelopmentComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
