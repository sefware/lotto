import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataComponent} from './page/data/data.component';
import {ResultComponent} from './page/result/result.component';
import {MainComponent} from './page/main/main.component';
import {AppService} from './service/app.service';
import {LoginService} from './service/login.service';
import {LoginComponent} from './page/login/login.component';
import {ResultTComponent} from './page/resultT/resultT.component';
import {ResultT2Component} from './page/resultT2/resultT2.component';
import {ResultT3Component} from './page/resultT3/resultT3.component';

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
    path: 'resultT',
    canActivate: [AppService],
    component: ResultTComponent,
  },
  {
    path: 'resultT2',
    canActivate: [AppService],
    component: ResultT2Component,
  },
  {
    path: 'resultT3',
    canActivate: [AppService],
    component: ResultT3Component,
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
