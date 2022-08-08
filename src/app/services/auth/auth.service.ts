import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { login_user } from 'src/app/state/actions/user.actions';
import { User } from 'src/app/state/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;
  currUser: User

  constructor(private store: Store<AppState>) {}

  login(userName: string, password: string): Observable<Boolean> {
    this.isUserLoggedIn = userName == 'admin' && password == 'admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

    if (this.isUserLoggedIn) {

      this.currUser = {
        id: 1,
        username: userName,
        password: password,
        isEditing: true
      }

      this.store.dispatch(login_user({user: this.currUser}))
    }

    return of(this.isUserLoggedIn).pipe(
        delay(1000),
        tap(val => { 
          console.log("Is User Authentication is successful: " + val); 
          console.log(localStorage)
        })
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn'); 
    console.log(localStorage)
  }
 
}
