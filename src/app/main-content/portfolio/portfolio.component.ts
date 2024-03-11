import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects: Project[] = [
    {
      name :  'JOIN',
      languages: 'HTML | CSS | JavaScript',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      link: '',
      github: 'https://www.github.com',
      image: 'project-join.png'
    },
    {
      name :  'Through the Forest',
      languages: 'HTML | CSS | JavaScript | OOP',
      description: 'Lorem ipsum',
      link: '',
      github: 'https://www.github.com',
      image: 'project-through-the-forest.png'
    }
  ];
}
