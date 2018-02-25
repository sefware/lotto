export class InputModel {

  id: string;
  time: string;
  up: string;
  low: string;

  constructor(params: InputModel) {
    Object.assign(this, params);
  }
}
