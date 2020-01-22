import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { MyfirstComponentComponent } from './myfirst-component/myfirst-component.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PrefixfornamePipe } from './prefixforname.pipe';
import { RoutingComponent } from './routing/routing.component';


@NgModule({
  declarations: [
    MyfirstComponentComponent,
    LogincomponentComponent,
    HomeComponent,
    PagenotfoundComponent,
    RoutingComponent,
    EmployeeComponent,
    PrefixfornamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
