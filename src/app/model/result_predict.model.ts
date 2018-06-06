export class ResultPredictModel {

  resultPredict1: number[] = [];
  resultPredict2: number[] = [];
  resultPredict3: number[] = [];
  result: number[] = [];

  constructor(params: ResultPredictModel) {
    Object.assign(this, params);
  }
}
