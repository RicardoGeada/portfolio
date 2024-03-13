import { Component } from '@angular/core';
import { AosDirective } from '../../directives/custom/aos/aos.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AosDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../../../styles/aos.scss']
})
export class AboutComponent {

}
