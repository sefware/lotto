import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class LoginService {

  constructor(public _authService: AuthService,
              private _router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this._authService.authentication.authState
      .do((user) => {
        if (this._authService.verified(user)) {
          this._router.navigateByUrl('');
        }
      })
      .map((user) => !this._authService.verified(user));
  }

}
