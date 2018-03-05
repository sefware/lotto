import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginService} from './service/login.service';
import {AppService} from './service/app.service';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AppService],
    loadChildren: './page/main/main.module#MainModule',
  },
  {
    path: 'data',
    // canActivate: [AppService],
    loadChildren: './page/data/data.module#DataModule'
  },
  {
    path: 'result',
    // canActivate: [AppService],
    loadChildren: './page/result/result.module#ResultModule'
  },
  {
    path: 'login',
    // canActivate: [LoginService],
    loadChildren: './page/login/login.module#LoginModule',
  },
  {path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
