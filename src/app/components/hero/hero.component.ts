import { Component } from '@angular/core';
import { ContactCardComponent } from "../contact-card/contact-card.component";

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
    imports: [ContactCardComponent]
})
export class HeroComponent {

}
