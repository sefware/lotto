import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {LoginRouting} from './login.routing';
import {LoginComponent} from './login.component';

@NgModule({
  imports: [
    LoginRouting,
    SharedModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
  ]
})

export class LoginModule {

}
