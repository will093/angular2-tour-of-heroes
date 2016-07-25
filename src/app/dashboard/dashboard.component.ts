import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../services/hero';
import { Router } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    directives: [HeroSearchComponent],
    moduleId: module.id
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private router: Router, private heroService: HeroService) {}

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}

