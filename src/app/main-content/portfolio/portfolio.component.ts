import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { AosDirective } from '../../directives/custom/aos/aos.directive';
import { ProjectsDataService } from '../../services/projects-data.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent, AosDirective, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', '../../../styles/aos.scss']
})
export class PortfolioComponent {

  projectsdata = inject(ProjectsDataService);

}
