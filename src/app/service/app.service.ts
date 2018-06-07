import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class  AppService implements CanActivate {

  constructor(private _authService: AuthService,
              private _router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this._authService.authentication.authState
      .do((user) => {
        if (!this._authService.verified(user)) {
          this._router.navigateByUrl('/login');
        }
        if(!!this._authService.currentUser.lastLogin){
          let currentTime =  new Date().getTime().toFixed(0);
          if((Number(currentTime) - Number(this._authService.currentUser.lastLogin) )> 86394068){
            this._authService.signOut()
          }
        }
      })
      .map((user) => this._authService.verified(user));
  }

}
