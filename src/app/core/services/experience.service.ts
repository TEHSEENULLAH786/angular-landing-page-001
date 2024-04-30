import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experienceHistory: Experience[] = [
    {
      id: 1,
      title: 'Senior Developer',
      company: 'Tech Solutions Inc',
      from: '2019',
      to: 'Present',
      responsibilities: [
        'Lead the development team.',
        'Design and implement new features.'
      ]
    },
	 {
      id: 2,
      title: 'Senior Developer',
      company: 'Tech Solutions Inc',
      from: '2019',
      to: 'Present',
      responsibilities: [
        'Lead the development team.',
        'Design and implement new features.'
      ]
    },
  ];

  constructor() { }

  getExperienceHistory(): Observable<Experience[]> {
    return of(this.experienceHistory);
  }
}
