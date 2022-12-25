import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProviderComponent } from './provider/provider.component';
import { ProviderService } from './provider.service';
import { CreateProviderComponent } from './create-provider/create-provider.component';
import { MaterialModule } from 'material.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ProviderComponent,
    CreateProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOtpInputModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule
    
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
