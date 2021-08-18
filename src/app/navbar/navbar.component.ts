import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    console.log('Auth : ' + this.authService.isLoggedIn());
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }

  signIn() {
    this.router.navigateByUrl('login');
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }

  signOut() {
    this.authService.SignOut();
  }
}
