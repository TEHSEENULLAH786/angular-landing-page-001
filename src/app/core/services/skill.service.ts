import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  getSkills(): Observable<Skill[]> {
	const skills: Skill[] = [
	  { id: 1, name: 'Angular', level: 'Advanced', percentage: 80 },
	  { id: 2, name: 'TypeScript', level: 'Intermediate', percentage: 100 },
	  { id: 3, name: 'HTML/CSS', level: 'Intermediate', percentage: 70 },
	];
	return of(skills);
 }
}
