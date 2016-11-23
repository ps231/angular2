import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { HeroDetailsComponent } from './hero-details.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }     from './dashboard.component';
import { HeroService }         from './hero.service';

@NgModule({
  imports:      [ BrowserModule, 
  				  FormsModule,
  				  AppRoutingModule
				],
  declarations: [ AppComponent, HeroDetailsComponent, HeroesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ]
})



export class AppModule { }
