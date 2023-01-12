import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './error404/error404.component';
import { AdminComponent } from './admin/admin.component';
import { ManagementComponent } from './management/management.component';
import { InternComponent } from './intern/intern.component';
import { ChatInternComponent } from './chat-intern/chat-intern.component';
import { ChatAdminComponent } from './chat-admin/chat-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    Error404Component,
    AdminComponent,
    ManagementComponent,
    InternComponent,
    ChatInternComponent,
    ChatAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
