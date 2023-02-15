import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent {
  constructor(private router: Router) {}

  navigateLogin(): void {
    this.router.navigate(['/login']);
  }
}
