import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataComponent} from './page/data/data.component';
import {ResultComponent} from './page/result/result.component';
import {MainComponent} from './page/main/main.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AppService],
    component: MainComponent,
    children: [
      // {path: 'data', component: DataComponent},
      // {path: 'result', component: ResultComponent}
    ]
  },
  {
    path: 'data',
    // canActivate: [AppService],
    component: DataComponent,
  },
  {
    path: 'result',
    // canActivate: [AppService],
    component: ResultComponent,
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
