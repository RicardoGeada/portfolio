import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {

  constructor() { }

   readonly projects: Project[] = [
    {
      name :  'DA Bubble',
      languages: 'Angular | TypeScript | SCSS | Firebase',
      description: 'project.da-bubble.description',
      link: 'https://da-bubble.ricardogeada.com',
      github: 'https://github.com/RicardoGeada/DABubble',
      image: 'project-da-bubble.png'
    },
    {
      name :  'JOIN',
      languages: 'HTML | CSS | JavaScript',
      description: 'project.join.description',
      link: 'https://join.ricardogeada.com',
      github: 'https://github.com/RicardoGeada/join-group-project',
      image: 'project-join.png'
    },
    {
      name :  'Through the Forest',
      languages: 'HTML | CSS | JavaScript | OOP',
      description: 'project.throughTheForest.description',
      link: 'https://through-the-forest.ricardogeada.com',
      github: 'https://github.com/RicardoGeada/through_the_forest',
      image: 'project-through-the-forest.png'
    }
  ];
}
