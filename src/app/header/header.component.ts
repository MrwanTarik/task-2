import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  Router,
  NavigationEnd,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  currentPath: string = '';
  isViewOfferRoute?: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.url;
        if (event.url === '/view-offer') {
          this.currentPath = 'تفاصيل العرض';
        } else {
          this.currentPath = ' العروض';
        }
      });
  }
}
