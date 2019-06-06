import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';

import { InMemoryDataService } from './services/in-memory-data.service';

import { RequestCache, RequestCacheWithMap } from './services/request-cache.service';
     
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageService } from './services/message.service';
import { HeroesService } from './heroes/heroes.service';
import { HttpErrorHandler } from './services/http-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    //Always import the HttpClientInMemoryWebApiModule after the
    //HttpClientModule to ensure that the in-memory backend provider 
    //supersedes the Angular version.
    environment.production ?
    [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    HeroesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
