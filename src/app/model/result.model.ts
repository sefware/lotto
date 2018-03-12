import {ResultInputModel} from './result_input.model';

export class ResultModel {

  name: string;
  inputs: ResultInputModel[];
  summary: number;

  constructor(params: ResultModel) {
    Object.assign(this, params);
  }
}
