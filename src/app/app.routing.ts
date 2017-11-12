/**
 * Created by chaiwut on 10/31/17.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './profile/profile.module#ProfileModule'},
  {path: 'project', loadChildren: './project/project.module#ProjectModule'},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
