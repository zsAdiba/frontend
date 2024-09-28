import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  constructor(private router: Router) {}

  onSubmit() {
    // Add authentication logic here if needed
    this.router.navigate(['/welcome']); // Redirect to welcome page
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

}
