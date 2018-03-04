import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';

const LOGIN_ROUTER: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(LOGIN_ROUTER)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class LoginRouting {
}
