import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../../core/models/experience';
import { ExperienceService } from '../../core/services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience$!: Observable<Experience[]>;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experience$ = this.experienceService.getExperienceHistory();
  }
}
