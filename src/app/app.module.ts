import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Routes
import { app_routing } from './app.routes';


import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeEditComponent } from './components/heroe-edit/heroe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
