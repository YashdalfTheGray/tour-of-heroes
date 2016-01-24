import { Component } from 'angular2/core';

interface Hero {
    id: number;
    name: string
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.tpl.html'
})
export class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}
