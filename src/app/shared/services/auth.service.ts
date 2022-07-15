import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  isLoading = false;
  attachmentList: any[] = [
    {
      id: '1',
      name: 'oanh',
      url: '',
    },
    { id: '2', name: 'test', url: '' },
  ];

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    this.attachmentList = [...this.attachmentList, {id:3, name:'tétttttt',}]
    return of(true).pipe(
      delay(1000),
      tap(() => (this.isLoading = true)),
      tap(() => (this.isLoggedIn = true)),
      tap(() => (this.isLoading = false))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  loading(): boolean {
    this.isLoading = true;
    delay(1000);
    return true;
  }
}
