import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';

import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppservicesService } from './appservices.service';
import { StateWiseDataComponent } from './dashboard/state-wise-data/state-wise-data.component';

const appRoutes:Routes=[

  {path:'', component : DashboardComponent},
  {path:'State-Data', component: StateWiseDataComponent},
  
  


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    StateWiseDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([]),
    HttpClientModule,
    RouterModule
  ],
  providers: [AppservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
