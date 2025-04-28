import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {

  constructor() { }

   readonly projects: Project[] = [
    {
      name: 'Videoflix',
      languages: 'Angular | TypeScript | SCSS | Python | Django',
      description: 'project.videoflix.description',
      link: 'https://videoflix.ricardogeada.com',
      github: {
        frontend: 'https://github.com/RicardoGeada/videoflix-frontend',
        backend: 'https://github.com/RicardoGeada/videoflix-backend',
      },
      image: 'project-videoflix.png',
    },
    {
      name :  'DA Bubble',
      languages: 'Angular | TypeScript | SCSS | Firebase',
      description: 'project.da-bubble.description',
      link: 'https://da-bubble.ricardogeada.com',
      github: {
        frontend:'https://github.com/RicardoGeada/DABubble',
      },
      image: 'project-da-bubble.png'
    },
    {
      name :  'JOIN',
      languages: 'HTML | CSS | JavaScript',
      description: 'project.join.description',
      link: 'https://join.ricardogeada.com',
      github: {
        frontend:'https://github.com/RicardoGeada/join-group-project',
      },
      image: 'project-join.png'
    },
    {
      name :  'Through the Forest',
      languages: 'HTML | CSS | JavaScript | OOP',
      description: 'project.throughTheForest.description',
      link: 'https://through-the-forest.ricardogeada.com',
      github: {
        frontend:'https://github.com/RicardoGeada/through_the_forest',
      },
      image: 'project-through-the-forest.png'
    },
    {
      name :  'Character Counter',
      languages: 'React | Typescript | SCSS',
      description: 'project.character-counter.description',
      link: 'https://character-counter.ricardogeada.com',
      github: {
        frontend:'https://github.com/RicardoGeada/fm-character-counter',
      },
      image: 'project-character-counter.png'
    },
  ];
}
