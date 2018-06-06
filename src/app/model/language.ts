export class LanguageModel {
  code: string;
  name: string;
  icon: string;

  constructor(params: LanguageModel) {
    Object.assign(this, params);
  }
}
