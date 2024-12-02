import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AosDirective } from '../../directives/custom/aos/aos.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, AosDirective, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../../../styles/aos.scss'],
})
export class SkillsComponent {
  skills: { frontend: string[]; backend: string[] } = {
    frontend: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML',
      'Scrum',
      'Firebase',
      'Git',
      'CSS',
      'Rest-Api',
      'Material-Design',
    ],
    backend: [
      'Python',
      'Django',
      'Linux',
      'Redis',
      'PostgreSQL',
      'Heroku',
      'SQL',
      'Docker',
      'Cloud',
    ],
  };
}
