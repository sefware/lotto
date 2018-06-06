export class ResultInputModel {

  time: string;
  up: string;
  low: string;
  value: string;
  result: boolean;
  resultCount = 0;

  constructor(params: ResultInputModel) {
    Object.assign(this, params);
  }
}
