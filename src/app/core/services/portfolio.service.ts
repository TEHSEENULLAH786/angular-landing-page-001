import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortfolioItem } from '../models/portfolio';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for project 1.',
      imageUrl: 'assets/portfolio-01.webp',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for project 2.',
      imageUrl: 'assets/portfolio-02.webp',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description for project 2.',
      imageUrl: 'assets/portfolio-03.jpeg',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description for project 4.',
      imageUrl: 'assets/portfolio-01.webp',
    },
  ];

  constructor() {}

  getPortfolioItems(): Observable<PortfolioItem[]> {
    return of(this.portfolioItems);
  }
}
