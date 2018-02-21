/**
 * Created by chaiwut on 10/31/17.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './main/main.module#MainModule'},
  {path: 'profile', loadChildren: './profile/profile.module#MainModule'},
  {path: 'project', loadChildren: './project/project.module#ProjectModule'},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
