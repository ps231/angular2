import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailsComponent } from './hero-details.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';

@NgModule({
  imports:      [ BrowserModule, 
  				  FormsModule,
  				  RouterModule.forRoot([
  				  {
    				path: 'heroes',
    				component: HeroesComponent
  				  }
				  ])
				],
  declarations: [ AppComponent, HeroDetailsComponent, HeroesComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ]
})



export class AppModule { }
