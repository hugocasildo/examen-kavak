import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { FindPostResolver } from './core/resolvers/find-post.resolver';
import { PipesModule } from './core/shared/pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [FindPostResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
