import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {path: 'pages',
    loadChildren: () => import('../../src/app/pages/pages.module').then(m => m.PagesModule), data: { breadcrumb : 'Pages'}, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
