import {Injectable} from '@angular/core';
import {InputModel} from '../model/input.model';
import {ResultModel} from '../model/result.model';
import {ResultInputModel} from '../model/result_input.model';

@Injectable()
export class FormulaOtherService {

  inputs = [];

  private static getFormulaNameA(index: string) {
    if (index.length < 2) {
      index = '00' + index;
    }
    if (index.length < 3) {
      index = '0' + index;
    }
    return 'A-' + index;
  }

  getFormulaA(index: number) {
    return FormulaOtherService.getFormulaNameA(String(index));
  }

  async formulaCalculateA(inputs: InputModel[]) {
    this.inputs = inputs;
    const resultModel: ResultModel[] = [];

    let _inputs = this.formulaA();

    let lastInput = _inputs.pop();
    _inputs.sort(function (obj1: InputModel, obj2: InputModel) {
      if (obj1.time < obj2.time) return -1;
      else if (obj1.time > obj2.time) return 1;
      else return 0;
    });
    _inputs.push(lastInput);

    resultModel.push({
      name: this.getFormulaA(1),
      inputs: _inputs,
      summary: 0
    });

    return new Promise((resolve) => {
      resolve(resultModel);
    });
  }

  formulaA() {

    const resultList: ResultInputModel[] = [];
    this.inputs.forEach(s => {
      let cal1 = Number(s.up[0]) + Number(s.up[1]);
      let cal2 = Number(s.up[1]) + Number(s.up[2]);
      let cal3 = Number(String(cal1).substring(0,String(cal1).length)) + Number(String(cal2).substring(0,String(cal2).length)) - 1;
      resultList.push(<ResultInputModel>{
        time: s.time,
        up: s.up,
        low: s.low,
        value: String(cal3),
        result: false,
        resultCount: 0
      });
    });

    resultList.push(<ResultInputModel>{
      time: '',
      up: '',
      low: '',
      value: '',
      result: true,
      resultCount: 0
    });

    return resultList;
  }

}
