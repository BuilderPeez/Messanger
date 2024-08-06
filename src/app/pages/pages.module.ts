import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PageRoutingModule } from './pages.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from '../side-bar/side-bar.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PageRoutingModule,
    FormsModule,
    
  
  ],
  declarations: [
    PagesComponent,
    SideBarComponent,
  ],
  exports: [
    PagesComponent,
    
  ],
})
export class PagesModule {}
