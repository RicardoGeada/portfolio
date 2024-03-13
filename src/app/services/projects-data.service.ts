import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {

  constructor() { }

   readonly projects: Project[] = [
    {
      name :  'JOIN',
      languages: 'HTML | CSS | JavaScript',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      link: 'https://join.ricardogeada.com',
      github: 'https://github.com/RicardoGeada/join-group-project',
      image: 'project-join.png'
    },
    {
      name :  'Through the Forest',
      languages: 'HTML | CSS | JavaScript | OOP',
      description: 'Hilf dem Helden dieses Jump-and-Run Spiels die Gefahren des Waldes zu überstehen und sicher nach Hause zu gelangen.',
      link: 'https://throughtheforest.ricardogeada.com',
      github: 'https://github.com/RicardoGeada/through_the_forest',
      image: 'project-through-the-forest.png'
    }
  ];
}
