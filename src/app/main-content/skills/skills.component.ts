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
  skills: string[] = [
    'Angular',
    'Typescript',
    'Javascript',
    'HTML',
    'Scrum',
    'Firebase',
    'Git',
    'CSS',
    'Rest-Api',
    'Material-Design',
  ];
}
