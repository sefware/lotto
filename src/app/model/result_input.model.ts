export class ResultInputModel {

  time: number;
  value: number;
  result: boolean;
  resultCount = 0;

  constructor(params: ResultInputModel) {
    Object.assign(this, params);
  }
}
