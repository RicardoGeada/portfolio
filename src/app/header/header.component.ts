import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mobileMenuOpen: boolean = false;
  mdq = window.matchMedia('(max-width: 768px)');

  constructor() {
    this.checkMatchMedia(); 
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
