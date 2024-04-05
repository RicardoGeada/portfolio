import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.scss'
})
export class LoadingScreenComponent {
  loaded = false;

  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => this.loaded = true, 500)
    })
  }
}
