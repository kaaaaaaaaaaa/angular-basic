import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.authService.attachmentList);
  }

  login() {
    this.authService
      .login()
      .subscribe((r) => this.router.navigateByUrl('/home'));
    console.log(this.authService.attachmentList);

  }
  register() {
    this.router.navigateByUrl('/register');
  }
}
