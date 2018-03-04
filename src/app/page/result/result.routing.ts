import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultComponent} from './result.component';

const RESULT_ROUTER: Routes = [
  {
    path: '',
    component: ResultComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(RESULT_ROUTER)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class ResultRouting {
}
