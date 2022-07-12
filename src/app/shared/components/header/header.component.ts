import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../pages/Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLoginPage: boolean = true;
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    console.log(this.authService.isLoggedIn);

    (this.router.url === '/login' && this.isLoginPage === true) ||
      this.isLoginPage === false;
    console.log(this.isLoginPage);
  }
  ngOnChanges(changes: SimpleChanges): void{
  console.log(changes);
  }
}
