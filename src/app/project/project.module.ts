import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: ProjectComponent}
    ])
  ],
  declarations: [
    ProjectComponent
  ]
})
export class ProjectModule {
}
