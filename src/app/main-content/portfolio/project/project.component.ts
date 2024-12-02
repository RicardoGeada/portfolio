import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  
  active: boolean = false;

  @Input() project : Project = {
    name :  '',
    languages: '',
    description: '',
    link: '',
    github: {
      frontend: '',
    },
    image: '',
  };
}
