import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../../core/models/education';
import { EducationService } from '../../core/services/education.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationHistory$!: Observable<Education[]>;

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.educationHistory$ = this.educationService.getEducationHistory();
  }
}


