import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioItem } from '../../core/models/portfolio';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

	portfolioItems$: Observable<PortfolioItem[]>;

	constructor(private portfolioService: PortfolioService) {
		this.portfolioItems$ = this.portfolioService.getPortfolioItems();
	}
	
	ngOnInit(): void {}

}
