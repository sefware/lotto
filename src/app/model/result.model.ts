import {ResultInputModel} from './result_input.model';

export class ResultModel {

  name: string;
  inputs: ResultInputModel[];

  constructor(params: ResultModel) {
    Object.assign(this, params);
  }
}
