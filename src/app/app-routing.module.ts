import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateWiseDataComponent } from './dashboard/state-wise-data/state-wise-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';

const routes:Routes=[
  { path:'', component : DashboardComponent },
  { path:'dashboard', component : DashboardComponent },
  { path:'statedata', component: StateWiseDataComponent },
  { path:'header', component : HeaderComponent },
  { path:'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
