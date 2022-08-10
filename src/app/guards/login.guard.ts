import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import { AuthService } from '../services/auth/auth.service';
import { AppState } from '../state/app.state';
import { User } from '../state/models/user.model';
import { getUser } from '../state/selectors/user.selector';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

   user: User

  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) {

   store.select(getUser).subscribe(
      user => this.user = user
   )

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let url: string = state.url;

      return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {

   //   let val: any = localStorage?.getItem('isUserLoggedIn');

     if(this.user != null && this.user.id > 0) {
        if(url == "/login")
           return this.router.parseUrl('/home');
        else
           return true;
     } else {
        return this.router.parseUrl('/login');
     }

     return this.router.parseUrl('/login')
  }
  
  
}
