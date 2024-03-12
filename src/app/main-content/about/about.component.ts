import { Component } from '@angular/core';
import { AosDirective } from '../../directives/custom/aos/aos.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AosDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
