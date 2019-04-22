import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate() {

    // check whether the session is there...
    //this.authService.isLoggedIn()

    // redirect the user to login page if no session.
    // send false ;
    return false;
  }

}
