import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
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
