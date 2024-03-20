import { Component } from '@angular/core';
import { AosDirective } from '../../directives/custom/aos/aos.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AosDirective, TranslateModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../../../styles/aos.scss']
})
export class AboutComponent {

}
