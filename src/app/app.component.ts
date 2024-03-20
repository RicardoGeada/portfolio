import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
