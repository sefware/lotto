export class InputModel {

  id?: string;
  time: number;
  up: number;
  low: number;

  constructor(params: InputModel) {
    Object.assign(this, params);
  }
}
