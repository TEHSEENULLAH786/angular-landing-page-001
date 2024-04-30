import { Component } from '@angular/core';
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { EducationComponent } from "../../components/education/education.component";
import { ExperienceComponent } from "../../components/experience/experience.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { PortfolioComponent } from "../../components/portfolio/portfolio.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-public',
    standalone: true,
    templateUrl: './public.component.html',
    styleUrl: './public.component.css',
    imports: [ContactComponent, PortfolioComponent, AboutMeComponent, HeroComponent, HeaderComponent, SkillsComponent, EducationComponent, ExperienceComponent]
})
export class PublicComponent {

}
