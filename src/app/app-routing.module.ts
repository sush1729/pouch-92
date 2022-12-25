import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProviderComponent } from './create-provider/create-provider.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProviderComponent } from './provider/provider.component';

const routes: Routes = [{path: '', component: LoginComponent},
{path: 'login', component: LoginComponent},
{path: 'home', component: HomeComponent},
{path: 'provider', component: ProviderComponent},
{path: 'create-provider', component: CreateProviderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
