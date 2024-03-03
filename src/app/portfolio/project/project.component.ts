import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  
  active: boolean = false;

  @Input() project : Project = {
    name :  'Project Name',
    languages: '01 | 02 | 03',
    description: 'Lorem ipsum',
    link: '',
    github: 'https://www.github.com',
    image: '',
  };
}
