import {Injectable} from '@angular/core';
import {InputModel} from '../model/input.model';
import {ResultModel} from '../model/result.model';
import {ResultInputModel} from '../model/result_input.model';

@Injectable()
export class FormulaService {

  constructor() {
  }

  private static getFormulaName(index: string) {
    if (index.length < 2) {
      index = '00' + index;
    }

    if (index.length < 3) {
      index = '0' + index;
    }
    return 'R' + index;
  }

  getFormula(index: number) {
    return FormulaService.getFormulaName(String(index));
  }

  formulaCalculate(inputs: InputModel[]) {
    const resultModel: ResultModel[] = [];

    // ร้อยบน
    for (let _i = 0; _i < 10; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'up', '', 1, 0, '', _i % 10, '+')
      });
    }
    // สิบบน
    for (let _i = 10; _i < 20; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'up', '', 2, 0, '', _i % 10, '+')
      });
    }
    // หน่วยบน
    for (let _i = 20; _i < 30; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'up', '', 3, 0, '', _i % 10, '+')
      });
    }
    // สิบล่าง
    for (let _i = 30; _i < 40; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'low', '', 1, 0, '', _i % 10, '+')
      });
    }
    // หน่วยล่าง
    for (let _i = 40; _i < 50; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'low', '', 2, 0, '', _i % 10, '+')
      });
    }
    // ร้อย + สิบบน
    for (let _i = 50; _i < 60; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'up', 'up', 1, 2, '+', _i % 10, '+')
      });
    }
    // ร้อย + หน่วยบน
    for (let _i = 60; _i < 70; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'up', 'up', 1, 3, '+', _i % 10, '+')
      });
    }
    // ร้อย + สิบล่าง
    for (let _i = 70; _i < 80; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'up', 'low', 1, 1, '+', _i, '+')
      });
    }
    // ร้อย + หน่วยล่าง
    for (let _i = 80; _i < 90; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'up', 'low', 1, 2, '+', _i % 10, '+')
      });
    }
    // สิบบน + หน่วยบน
    for (let _i = 90; _i < 100; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'up', 'up', 2, 3, '+', _i % 10, '+')
      });
    }
    // สิบบน + สิบล่าง
    for (let _i = 100; _i < 110; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'up', 'low', 2, 1, '+', _i % 10, '+')
      });
    }
    // สิบบน + หน่วยล่าง
    for (let _i = 110; _i < 120; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'up', 'low', 2, 2, '+', _i % 10, '+')
      });
    }
    // หน่วยบน + สิบล่าง
    for (let _i = 120; _i < 130; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'up', 'low', 3, 1, '+', _i % 10, '+')
      });
    }
    // หน่วยบน + หน่วยล่าง
    for (let _i = 130; _i < 140; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'up', 'low', 3, 2, '+', _i % 10, '+')
      });
    }
    // สิบล่าง + หน่วยล่าง
    for (let _i = 140; _i < 150; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(inputs, 'low', 'low', 2, 2, '+', _i % 10, '+')
      });
    }
    return resultModel;
  }

  formula(inputs: InputModel[],
          type1: string,
          type2: string,
          position1: number,
          position2: number,
          positionOperaion: string,
          value: number,
          cal: string) {

    const resultList: ResultInputModel[] = [];
    inputs.forEach(s => {
      let a = '';

      switch (type1) {
        case 'up': {
          a = s.up;
          break;
        }
        case 'low': {
          a = s.low;
          break;
        }
      }

      const calValue1 = this.calSingleValue(a, position1, cal, value);
      let calValue = calValue1;

      if (type2 !== '') {
        let b = '';
        switch (type2) {
          case 'up': {
            b = s.up;
            break;
          }
          case 'low': {
            b = s.low;
            break;
          }
        }

        const calValue2 = this.calSingleValue(b, position2, cal, value);

        switch (positionOperaion) {
          case '+': {
            calValue = calValue1 + calValue2;
            break;
          }
          case '-': {
            calValue = calValue1 - calValue2;
            break;
          }
          case '*': {
            calValue = calValue1 * calValue2;
            break;
          }
        }
      }

      if (String(calValue).length > 1) {
        const _calValue = String(calValue).substring(String(calValue).length - 1, String(calValue).length);
        calValue = Number(_calValue);
      }

      let sumResult = false;
      let SumresultCount = 0;

      let indexResultUp = 0;
      let indexResultLow = 0;

      if (inputs.indexOf(s) !== (inputs.length - 1)) {
        indexResultUp = inputs[inputs.indexOf(s) + 1].up.indexOf(String(calValue));
        indexResultLow = inputs[inputs.indexOf(s) + 1].low.indexOf(String(calValue));

        if ((indexResultUp >= 0) || (indexResultLow >= 0)) {
          sumResult = true;
          const trueCountUp = inputs[inputs.indexOf(s) + 1].up.match(new RegExp(String(calValue), 'g'));
          const trueCountLow = inputs[inputs.indexOf(s) + 1].low.match(new RegExp(String(calValue), 'g'));
          SumresultCount = SumresultCount + (trueCountUp ? trueCountUp.length : 0);
          SumresultCount = SumresultCount + (trueCountLow ? trueCountLow.length : 0);
        }

      }

      resultList.push(<ResultInputModel>{
        time: s.time,
        up: s.up,
        low: s.low,
        value: String(calValue),
        result: sumResult,
        resultCount: SumresultCount
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

  calSingleValue(value: string, index: number, operaion: string, operationValue: number) {

    switch (index) {
      case 1: {
        value = value.substring(0, 1);
        break;
      }
      case 2: {
        value = value.substring(1, 2);
        break;
      }
      case 3: {
        value = value.substring(2, 3);
        break;
      }
    }

    let calValue = 0;
    switch (operaion) {
      case '+': {
        calValue = Number(value) + operationValue;
        break;
      }
      case '-': {
        calValue = Number(value) - operationValue;
        break;
      }
      case '*': {
        calValue = Number(value) * operationValue;
        break;
      }
    }

    return calValue;
  }
}
