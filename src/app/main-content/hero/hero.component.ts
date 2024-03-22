import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AosDirective } from '../../directives/custom/aos/aos.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule, AosDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss','../../../styles/aos.scss']
})
export class HeroComponent {

}
