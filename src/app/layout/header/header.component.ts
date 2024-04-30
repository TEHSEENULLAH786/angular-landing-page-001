import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // 'styleUrl' should be 'styleUrls'
})
export class HeaderComponent { }
