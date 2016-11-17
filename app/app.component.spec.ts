/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

////////  SPECS  /////////////
describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected title text', () => {
    de = fixture.debugElement.query(By.css('h1'));
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/heroes/i,
      'title should say something about "Heroes"');
  });

   it('should have expected hero\'s information', () => {
    de = fixture.debugElement.query(By.css('h2'));
    fixture.detectChanges();
    const h2 = de.nativeElement;
    expect(h2.innerText).toMatch(/Windstorm details!/i,
      '<h2> should show hero\'s details');

      de = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
    const id = de.nativeElement;
    expect(id.innerText).toMatch(/1/i,
      '<h2> should show hero\'s id');

           // de = fixture.debugElement.query(By.css('div'));
    //fixture.detectChanges();
    //const name = de.nativeElement;
    //expect(name.innerText).toMatch(/Windstorm/i,
      //'<h2> should show hero\'s name');

  }); 
});
