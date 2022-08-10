import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { login_user, logout_user } from 'src/app/state/actions/user.actions';
import { User } from 'src/app/state/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  users: User[] =[
    {
      id: 1,
      username: 'admin1',
      password: 'admin1'
    },
    {
      id: 2,
      username: 'admin2',
      password: 'admin2'
    }
  ]

  isUserLoggedIn: boolean = false;
  currUser: User

  constructor(private store: Store<AppState>) {}

  login(userName: string, password: string): Observable<Boolean> {

    const foundUser = this.users.find(user => user.username == userName)

    if (foundUser) {

      this.isUserLoggedIn = password == foundUser.password;
      // localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

      if (this.isUserLoggedIn) {
        this.store.dispatch(login_user({user: foundUser}))
        console.log('Log in successful')
      }

    }
    
    return of(this.isUserLoggedIn).pipe(
        delay(1000),
        tap(val => { 
          // console.log("Is User Authentication is successful: " + val); 
          // console.log(localStorage)
        })
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    // localStorage.removeItem('isUserLoggedIn');

    this.store.dispatch(logout_user());
  }
 
}
