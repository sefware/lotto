import {Injectable} from '@angular/core';
import {InputModel} from '../model/input.model';
import {ResultModel} from '../model/result.model';
import {ResultInputModel} from '../model/result_input.model';

@Injectable()
export class FormulaTService {

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

  private static getFormulaNameB(index: string) {
    if (index.length < 2) {
      index = '00' + index;
    }
    if (index.length < 3) {
      index = '0' + index;
    }
    return 'B-' + index;
  }

  getFormulaA(index: number) {
    return FormulaTService.getFormulaNameA(String(index));
  }

  getFormulaB(index: number) {
    return FormulaTService.getFormulaNameB(String(index));
  }

  async formulaCalculateA(inputs: InputModel[]) {
    this.inputs = inputs;
    const resultModel: ResultModel[] = [];

    for (let _i = 2; _i < 18; _i++) {
      let input = this.formulaA(_i);
      resultModel.push({
        name: this.getFormulaA(_i),
        inputs: input.slice().sort(),
        summary: input.filter(s => s.result).length - 1
      });
    }

    return new Promise((resolve) => {
      resolve(resultModel);
    });
  }

  async formulaCalculateB(inputs: InputModel[]) {
    this.inputs = inputs;
    const resultModel: ResultModel[] = [];

    for (let _i = 2; _i < 18; _i++) {
      let input = this.formulaB(_i);
      let lastInput = input.pop();
      input.sort(function (obj1: InputModel, obj2: InputModel) {
        if (obj1.time < obj2.time) return -1;
        else if (obj1.time > obj2.time) return 1;
        else return 0;
      });
      input.push(lastInput);

      resultModel.push({
        name: this.getFormulaB(_i),
        inputs: input,
        summary: input.filter(s => s.result).length - 1
      });
    }

    return new Promise((resolve) => {
      resolve(resultModel);
    });
  }

  formulaA(type: number) {

    const resultList: ResultInputModel[] = [];
    this.inputs.forEach(s => {
      let sumInput = 0;
      let value = s.up + s.low;
      [0, 1, 2, 3, 4].forEach(i => {
        sumInput = sumInput + Number(value.substring(i, i + 1));
      });

      switch (type) {
        case 2: {
          sumInput = sumInput / 0.2;
          break;
        }
        case 3: {
          sumInput = sumInput / 0.2;
          break;
        }
        case 4: {
          sumInput = sumInput / 0.3;
          break;
        }
        case 5: {
          sumInput = sumInput / 0.3;
          break;
        }
        case 6: {
          sumInput = sumInput / 0.4;
          break;
        }
        case 7: {
          sumInput = sumInput / 0.4;
          break;
        }
        case 8: {
          sumInput = sumInput / 0.5;
          break;
        }
        case 9: {
          sumInput = sumInput / 0.5;
          break;
        }
        case 10: {
          sumInput = sumInput / 0.6;
          break;
        }
        case 11: {
          sumInput = sumInput / 0.6;
          break;
        }
        case 12: {
          sumInput = sumInput / 0.7;
          break;
        }
        case 13: {
          sumInput = sumInput / 0.7;
          break;
        }
        case 14: {
          sumInput = sumInput / 0.8;
          break;
        }
        case 15: {
          sumInput = sumInput / 0.8;
          break;
        }
        case 16: {
          sumInput = sumInput / 0.9;
          break;
        }
        case 17: {
          sumInput = sumInput / 0.9;
          break;
        }
      }

      sumInput = sumInput * Number(value);

      let checking = false;
      let resultCount = 0;
      if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
        let _caldata = this.inputs[this.inputs.indexOf(s) + 1].up + this.inputs[this.inputs.indexOf(s) + 1].low;
        _caldata = _caldata.substring(1, 6);
        if (type % 2 == 0) {
          const valueResult1 = String(sumInput).replace('.', '').substring(0, 1);
          const valueResult2 = String(sumInput).replace('.', '').substring(1, 2);

          const checkValue1 = _caldata.match(new RegExp(valueResult1, 'g'));
          const checkValue2 = _caldata.match(new RegExp(valueResult2, 'g'));

          let val1 = 0;
          let val2 = 0;
          if (checkValue1 && checkValue1.length > 0) {
            checking = true;
            val1 = val1 + checkValue1.length;
          }
          if (checkValue2 && checkValue2.length > 0) {
            checking = true;
            val2 = resultCount + checkValue2.length;
          }
          resultCount = val1 + val2;

        } else {
          const valueResult1 = String(sumInput).replace('.', '').substring(4, 5);
          const valueResult2 = String(sumInput).replace('.', '').substring(5, 6);

          const checkValue1 = _caldata.match(new RegExp(valueResult1, 'g'));
          const checkValue2 = _caldata.match(new RegExp(valueResult2, 'g'));

          let val1 = 0;
          let val2 = 0;
          if (checkValue1 && checkValue1.length > 0) {
            checking = true;
            val1 = val1 + checkValue1.length;
          }
          if (checkValue2 && checkValue2.length > 0) {
            checking = true;
            val2 = resultCount + checkValue2.length;
          }
          resultCount = val1 + val2;
        }
      }

      resultList.push(<ResultInputModel>{
        time: s.time,
        up: s.up,
        low: s.low,
        value: String(sumInput).replace('.', '').substring(0, 6),
        result: checking,
        resultCount: resultCount
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

  formulaB(type: number) {

    const resultList: ResultInputModel[] = [];
    this.inputs.forEach(s => {
      let sumInput = 0;
      let value = s.up + s.low;
      [0, 1, 2, 3, 4, 5].forEach(i => {
        sumInput = sumInput + Number(value.substring(i, i + 1));
      });

      switch (type) {
        case 2: {
          sumInput = sumInput * 0.2;
          break;
        }
        case 3: {
          sumInput = sumInput * 0.2;
          break;
        }
        case 4: {
          sumInput = sumInput * 0.3;
          break;
        }
        case 5: {
          sumInput = sumInput * 0.3;
          break;
        }
        case 6: {
          sumInput = sumInput * 0.4;
          break;
        }
        case 7: {
          sumInput = sumInput * 0.4;
          break;
        }
        case 8: {
          sumInput = sumInput * 0.5;
          break;
        }
        case 9: {
          sumInput = sumInput * 0.5;
          break;
        }
        case 10: {
          sumInput = sumInput * 0.6;
          break;
        }
        case 11: {
          sumInput = sumInput * 0.6;
          break;
        }
        case 12: {
          sumInput = sumInput * 0.7;
          break;
        }
        case 13: {
          sumInput = sumInput * 0.7;
          break;
        }
        case 14: {
          sumInput = sumInput * 0.8;
          break;
        }
        case 15: {
          sumInput = sumInput * 0.8;
          break;
        }
        case 16: {
          sumInput = sumInput * 0.9;
          break;
        }
        case 17: {
          sumInput = sumInput * 0.9;
          break;
        }
      }

      sumInput = sumInput * Number(value);

      let resultCount = 0;
      let checking = false;
      if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
        let _caldata = this.inputs[this.inputs.indexOf(s) + 1].up + this.inputs[this.inputs.indexOf(s) + 1].low;
        _caldata = _caldata.substring(1, 6);
        if (type % 2 == 0) {
          const valueResult1 = String(sumInput).replace('.', '').substring(0, 1);
          const valueResult2 = String(sumInput).replace('.', '').substring(1, 2);

          const checkValue1 = _caldata.match(new RegExp(valueResult1, 'g'));
          const checkValue2 = _caldata.match(new RegExp(valueResult2, 'g'));

          let val1 = 0;
          let val2 = 0;
          if (checkValue1 && checkValue1.length > 0) {
            checking = true;
            val1 = val1 + checkValue1.length;
          }
          if (checkValue2 && checkValue2.length > 0) {
            checking = true;
            val2 = resultCount + checkValue2.length;
          }
          resultCount = val1 + val2;

        } else {
          const valueResult1 = String(sumInput).replace('.', '').substring(4, 5);
          const valueResult2 = String(sumInput).replace('.', '').substring(5, 6);

          const checkValue1 = _caldata.match(new RegExp(valueResult1, 'g'));
          const checkValue2 = _caldata.match(new RegExp(valueResult2, 'g'));

          let val1 = 0;
          let val2 = 0;
          if (checkValue1 && checkValue1.length > 0) {
            checking = true;
            val1 = val1 + checkValue1.length;
          }
          if (checkValue2 && checkValue2.length > 0) {
            checking = true;
            val2 = resultCount + checkValue2.length;
          }
          resultCount = val1 + val2;
        }
      }

      resultList.push(<ResultInputModel>{
        time: s.time,
        up: s.up,
        low: s.low,
        value: String(sumInput).replace('.', '').substring(0, 6),
        result: checking,
        resultCount: resultCount
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
