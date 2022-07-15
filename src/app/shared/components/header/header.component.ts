import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLoginPage: boolean = true;
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void{
  console.log(changes);

  }
  goToLogin(){
    this.authService.login().subscribe(r=> this.router.navigateByUrl('home'))
  }
}
