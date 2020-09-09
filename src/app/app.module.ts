import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from 'src/app/material.module';

import { ApiModule, Configuration, ConfigurationParameters} from '../api';
import { HomeComponent } from './pages/home/home.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleComponent } from './pages/detalle/detalle.component';

import { ChartsModule } from 'ng2-charts';
import { HeaderComponent } from './compopnent/header/header.component';
import { FooterComponent } from './compopnent/footer/footer.component';


import { NgxLoadingModule } from 'ngx-loading';



export function apiConfigSwagger(): Configuration{
  const params:ConfigurationParameters = {
    basePath: environment.basePathApi,
    apiKeys:{["Authorization"]: ''}
  }
  return new Configuration(params);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ChartsModule,
    NgxLoadingModule.forRoot({}),
    ApiModule.forRoot(apiConfigSwagger),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
