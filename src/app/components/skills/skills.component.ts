import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../../core/models/skill';
import { SkillService } from '../../core/services/skill.service';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {


  skills$!: Observable<Skill[]>;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skills$ = this.skillService.getSkills();
  }
}
