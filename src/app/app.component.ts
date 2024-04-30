import { Component } from '@angular/core';
import { PublicComponent } from "./layout/public/public.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [PublicComponent]
})
export class AppComponent {
  title = 'angular-17-standalone-porfolio-landing-template-01';
}
