import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  
  private educationHistory: Education[] = [
    {
      id: 1,
      degree: 'B.Sc. Computer Science',
      fieldOfStudy: 'Computer Science',
      institution: 'University of Example',
      startDate: 'September 2014',
      endDate: 'June 2018',
      details: [
        'Graduated with Honors',
        'President of the Computer Science Club',
      ],
    },
	 {
      id: 2,
      degree: 'B.Sc. Computer Science',
      fieldOfStudy: 'Computer Science',
      institution: 'University of Example',
      startDate: 'September 2014',
      endDate: 'June 2018',
      details: [
        'Graduated with Honors',
        'President of the Computer Science Club',
      ],
    },
  ];

  constructor() { }

  getEducationHistory(): Observable<Education[]> {
    return of(this.educationHistory);
  }
}
