import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataComponent} from './page/data/data.component';
import {ResultComponent} from './page/result/result.component';
import {MainComponent} from './page/main/main.component';
import {AppService} from './service/app.service';
import {LoginService} from './service/login.service';
import {LoginComponent} from './page/login/login.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AppService],
    component: MainComponent,
  },
  {
    path: 'data',
    canActivate: [AppService],
    component: DataComponent,
  },
  {
    path: 'result',
    canActivate: [AppService],
    component: ResultComponent,
  },
  {
    path: 'login',
    canActivate: [LoginService],
    component: LoginComponent
  },
  {path: '**', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
