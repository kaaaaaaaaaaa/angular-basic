import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLoginPage: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    (this.router.url === '/login' && this.isLoginPage === true) ||
      this.isLoginPage === false;
    console.log(this.isLoginPage);
  }
  ngOnChanges(changes: SimpleChanges): void{
  console.log(changes);
  }
}
