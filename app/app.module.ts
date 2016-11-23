import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailsComponent } from './hero-details.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }     from './dashboard.component';
import { HeroService }         from './hero.service';

@NgModule({
  imports:      [ BrowserModule, 
  				  FormsModule,
  				  RouterModule.forRoot([
  				  {
					  path: '',
  					  redirectTo: '/dashboard',
  					  pathMatch: 'full'
				  },
  				  {
    				path: 'heroes',
    				component: HeroesComponent
  				  },
  				  {
    				path: 'dashboard',
    				component: DashboardComponent
  				  }
				  ])
				],
  declarations: [ AppComponent, HeroDetailsComponent, HeroesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ]
})



export class AppModule { }
