import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './admin/admin.component';
import { ChatAdminComponent } from './chat-admin/chat-admin.component';
import { ChatInternComponent } from './chat-intern/chat-intern.component';
import { Error404Component } from './error404/error404.component';
import { InternComponent } from './intern/intern.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent },
  {path: 'inter', component: InternComponent },
  {path: 'admin', component: AdminComponent },
  {path: 'chat-intern', component: ChatInternComponent },
  {path: 'chat-admin', component: ChatAdminComponent },
  {path: 'management', component: ManagementComponent },
  {path: 'error404', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
