import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from '../chat-room/chat-room.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

const routes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            {path: 'chat', component: ChatRoomComponent, pathMatch: 'full'},
        ]
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
