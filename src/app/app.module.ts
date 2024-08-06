import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
// import { PagesComponent } from './pages/pages.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { PagesComponent } from './pages/pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiServicesService } from './api-services/api-services.service';
import { CreateAccountComponent } from './create-account/create-account.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'create', component: CreateAccountComponent, pathMatch: 'full'},

  {
    path: 'pages',
    component: PagesComponent,
    children : [
      {path: 'chat', component: ChatRoomComponent, pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent, pathMatch: 'full'},
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ChatRoomComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
