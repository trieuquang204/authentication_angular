import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'angular_authentication';
  ismenu = true;
  isMenuVisible = true;

  constructor(private router: Router) {}

  ngDoCheck() {
    let currentUrl = this.router.url;

    if(currentUrl == '/login' || currentUrl == '/register') {
      this.ismenu = false
    } else {
      this.ismenu = true
    }
  }
}
