import { Component }       from '@angular/core';
import { HeroService }     from './services/hero.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService],
  moduleId: module.id
})
export class AppComponent {
  title = 'Tour of Heroes';
}
