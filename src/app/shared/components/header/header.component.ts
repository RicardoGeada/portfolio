import { CommonModule } from '@angular/common';
import { Component, ElementRef} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mobileMenuOpen: boolean = false;
  mdq = window.matchMedia('(max-width: 768px)');
  pinned : boolean = false;
  translate : TranslateService;
  activeLanguage: 'en' | 'de' = 'en';
  

  stickyObserver = new IntersectionObserver(
    ([e]) => {
      window.scrollY > 0 ? this.pinned = true : this.pinned = false; 
    },
    { threshold: [1] }
  )

  constructor(el: ElementRef, translate: TranslateService) {
    this.checkMatchMedia();
    this.stickyObserver.observe(el.nativeElement); 
    this.translate = translate;
  }


  /* language switch */
  useLanguage(language : 'en' | 'de') {
    this.translate.use(language);
    this.activeLanguage = language;
  }


  /* mobile nav menu */ 

  /**
   * Scroll to content section
   * @param id - id of the content section to scroll to
   */
  scrollTo(id: string) {
    let el = document.getElementById(id);
    el?.scrollIntoView();
    this.mobileMenuOpen = false;
  }


  /**
   * Media Query Eventlistener to Hide Mobile Menu
   */
  checkMatchMedia() {
    this.mdq.addEventListener('change',(event) => {this.mobileMenuOpen = false});
  }
  

}
