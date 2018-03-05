import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataComponent} from './data.component';

const DATA_ROUTER: Routes = [
  {
    path: '',
    component: DataComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(DATA_ROUTER)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class DataRouting {
}
