import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Component/page/login/login.component';
import { PaymentComponent } from './Component/page/payment/payment.component';
import { RegisterComponent } from './Component/page/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { TitleComponent } from './Component/module/title/title.component';
import InputvalidateComponent from './Component/module/inputvalidate/inputvalidate.component';
import { Toast, ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './Component/page/header/header.component';
import { DashboardComponent } from './Component/page/dashboard/dashboard.component';
import { NotfoundComponent } from './Component/module/notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaymentComponent,
    RegisterComponent,
    TitleComponent,
    InputvalidateComponent,
    HeaderComponent,
    DashboardComponent,
    NotfoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut:4000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
