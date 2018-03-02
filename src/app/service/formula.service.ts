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

  formulaCalculate(inputs: InputModel[], calType: string) {
    const resultModel: ResultModel[] = [];
    // ร้อยบน
    for (let _i = 0; _i < 10; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'up', '', 1, 0, '', _i % 10, '+')
      });
    }
    // สิบบน
    for (let _i = 10; _i < 20; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'up', '', 2, 0, '', _i % 10, '+')
      });
    }
    // หน่วยบน
    for (let _i = 20; _i < 30; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'up', '', 3, 0, '', _i % 10, '+')
      });
    }
    // สิบล่าง
    for (let _i = 30; _i < 40; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'low', '', 1, 0, '', _i % 10, '+')
      });
    }
    // หน่วยล่าง
    for (let _i = 40; _i < 50; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'low', '', 2, 0, '', _i % 10, '+')
      });
    }
    // ร้อย + สิบบน
    for (let _i = 50; _i < 60; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'up', 'up', 1, 2, '+', _i % 10, '+')
      });
    }
    // ร้อย + หน่วยบน
    for (let _i = 60; _i < 70; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'up', 'up', 1, 3, '+', _i % 10, '+')
      });
    }
    // ร้อย + สิบล่าง
    for (let _i = 70; _i < 80; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'up', 'low', 1, 1, '+', _i, '+')
      });
    }
    // ร้อย + หน่วยล่าง
    for (let _i = 80; _i < 90; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'up', 'low', 1, 2, '+', _i % 10, '+')
      });
    }
    // สิบบน + หน่วยบน
    for (let _i = 90; _i < 100; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'up', 'up', 2, 3, '+', _i % 10, '+')
      });
    }
    // สิบบน + สิบล่าง
    for (let _i = 100; _i < 110; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'up', 'low', 2, 1, '+', _i % 10, '+')
      });
    }
    // สิบบน + หน่วยล่าง
    for (let _i = 110; _i < 120; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'up', 'low', 2, 2, '+', _i % 10, '+')
      });
    }
    // หน่วยบน + สิบล่าง
    for (let _i = 120; _i < 130; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'up', 'low', 3, 1, '+', _i % 10, '+')
      });
    }
    // หน่วยบน + หน่วยล่าง
    for (let _i = 130; _i < 140; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'up', 'low', 3, 2, '+', _i % 10, '+')
      });
    }
    // สิบล่าง + หน่วยล่าง
    for (let _i = 140; _i < 150; _i++) {
      resultModel.push({
        name: this.getFormula(_i + 1),
        inputs: this.formula(calType, inputs, 'low', 'low', 2, 2, '+', _i % 10, '+')
      });
    }
    return resultModel;
  }

  formula(calType: String,
          inputs: InputModel[],
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
      let calValue = String(calValue1);

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
            calValue = String(calValue1 + calValue2);
            break;
          }
          case '-': {
            calValue = String(calValue1 - calValue2);
            break;
          }
          case '*': {
            calValue = String(calValue1 * calValue2);
            break;
          }
        }
      }

      let sumResult = false;
      let SumresultCount = 0;

      let indexResultUp = 0;
      let indexResultLow = 0;

      if (String(calValue).length > 1) {
        const _calValue = String(calValue).substring(String(calValue).length - 1, String(calValue).length);
        calValue = _calValue;
      }

      let calValueFinal = String(calValue);
      let _calValueFinal = '0';

      switch (calType) {
        case '1': {
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
          break;
        }
        case '2': {
          _calValueFinal = calValueFinal;
          for (let _i = 1; _i < 5; _i++) {
            let next = String(Number(_calValueFinal) + _i);
            if (String(next).length > 1) {
              const _calValue = String(next).substring(String(next).length - 1, String(next).length);
              next = _calValue;
            }
            calValueFinal = calValueFinal + next;
          }
          calValue = calValueFinal;

          if (inputs.indexOf(s) !== (inputs.length - 1)) {
            const valueResultUp = inputs[inputs.indexOf(s) + 1].up[1];

            const checkValue = calValue.match(new RegExp(valueResultUp, 'g'));
            if (checkValue && checkValue.length > 0) {
              sumResult = true;
              SumresultCount = 0;
            }
          }
          break;
        }
        case '3': {
          _calValueFinal = calValueFinal;
          for (let _i = 1; _i < 5; _i++) {
            let next = String(Number(_calValueFinal) + _i);
            if (String(next).length > 1) {
              const _calValue = String(next).substring(String(next).length - 1, String(next).length);
              next = _calValue;
            }
            calValueFinal = calValueFinal + next;
          }
          calValue = calValueFinal;

          if (inputs.indexOf(s) !== (inputs.length - 1)) {
            const valueResultUp = inputs[inputs.indexOf(s) + 1].up[2];

            const checkValue = calValue.match(new RegExp(valueResultUp, 'g'));
            if (checkValue && checkValue.length > 0) {
              sumResult = true;
              SumresultCount = 0;
            }
          }
          break;
        }

        case '4': {
          _calValueFinal = calValueFinal;
          for (let _i = 1; _i < 5; _i++) {
            let next = String(Number(_calValueFinal) + _i);
            if (String(next).length > 1) {
              const _calValue = String(next).substring(String(next).length - 1, String(next).length);
              next = _calValue;
            }
            calValueFinal = calValueFinal + next;
          }
          calValue = calValueFinal;

          if (inputs.indexOf(s) !== (inputs.length - 1)) {
            const valueResultUp = inputs[inputs.indexOf(s) + 1].low[0];

            const checkValue = calValue.match(new RegExp(valueResultUp, 'g'));
            if (checkValue && checkValue.length > 0) {
              sumResult = true;
              SumresultCount = 0;
            }
          }
          break;
        }
        case '5': {
          _calValueFinal = calValueFinal;
          for (let _i = 1; _i < 5; _i++) {
            let next = String(Number(_calValueFinal) + _i);
            if (String(next).length > 1) {
              const _calValue = String(next).substring(String(next).length - 1, String(next).length);
              next = _calValue;
            }
            calValueFinal = calValueFinal + next;
          }
          calValue = calValueFinal;

          if (inputs.indexOf(s) !== (inputs.length - 1)) {
            const valueResultUp = inputs[inputs.indexOf(s) + 1].low[1];

            const checkValue = calValue.match(new RegExp(valueResultUp, 'g'));
            if (checkValue && checkValue.length > 0) {
              sumResult = true;
              SumresultCount = 0;
            }
          }
          break;
        }
        case '6': {
          _calValueFinal = calValueFinal;
          for (let _i = 1; _i < 3; _i++) {
            let next = String(Number(_calValueFinal) + _i);
            if (String(next).length > 1) {
              const _calValue = String(next).substring(String(next).length - 1, String(next).length);
              next = _calValue;
            }
            calValueFinal = calValueFinal + next;
          }
          calValue = calValueFinal;

          if (inputs.indexOf(s) !== (inputs.length - 1)) {
            const valueResult1 = inputs[inputs.indexOf(s) + 1].up[1];
            const valueResult2 = inputs[inputs.indexOf(s) + 1].up[2];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue1.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
            }

            if (checkValue2 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
            }
          }
          break;
        }
        case '7': {
          _calValueFinal = calValueFinal;
          for (let _i = 1; _i < 3; _i++) {
            let next = String(Number(_calValueFinal) + _i);
            if (String(next).length > 1) {
              const _calValue = String(next).substring(String(next).length - 1, String(next).length);
              next = _calValue;
            }
            calValueFinal = calValueFinal + next;
          }
          calValue = calValueFinal;

          if (inputs.indexOf(s) !== (inputs.length - 1)) {
            const valueResult1 = inputs[inputs.indexOf(s) + 1].low[0];
            const valueResult2 = inputs[inputs.indexOf(s) + 1].low[1];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue1.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
            }

            if (checkValue2 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
            }
          }
          break;
        }
        case '8': {
          _calValueFinal = calValueFinal;
          for (let _i = 1; _i < 6; _i++) {
            let next = String(Number(_calValueFinal) + _i);
            if (String(next).length > 1) {
              const _calValue = String(next).substring(String(next).length - 1, String(next).length);
              next = _calValue;
            }
            calValueFinal = calValueFinal + next;
          }
          calValue = calValueFinal;

          if (inputs.indexOf(s) !== (inputs.length - 1)) {
            const valueResult1 = inputs[inputs.indexOf(s) + 1].up[1];
            const valueResult2 = inputs[inputs.indexOf(s) + 1].up[2];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue2 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = 0;
            }
          }
          break;
        }
        case '9': {
          _calValueFinal = calValueFinal;
          for (let _i = 1; _i < 7; _i++) {
            let next = String(Number(_calValueFinal) + _i);
            if (String(next).length > 1) {
              const _calValue = String(next).substring(String(next).length - 1, String(next).length);
              next = _calValue;
            }
            calValueFinal = calValueFinal + next;
          }
          calValue = calValueFinal;

          if (inputs.indexOf(s) !== (inputs.length - 1)) {
            const valueResult1 = inputs[inputs.indexOf(s) + 1].up[1];
            const valueResult2 = inputs[inputs.indexOf(s) + 1].up[2];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue2 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = 0;
            }
          }
          break;
        }
        case '10': {
          _calValueFinal = calValueFinal;
          for (let _i = 1; _i < 8; _i++) {
            let next = String(Number(_calValueFinal) + _i);
            if (String(next).length > 1) {
              const _calValue = String(next).substring(String(next).length - 1, String(next).length);
              next = _calValue;
            }
            calValueFinal = calValueFinal + next;
          }
          calValue = calValueFinal;

          if (inputs.indexOf(s) !== (inputs.length - 1)) {
            const valueResult1 = inputs[inputs.indexOf(s) + 1].up[1];
            const valueResult2 = inputs[inputs.indexOf(s) + 1].up[2];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue2 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = 0;
            }
          }
          break;
        }
        case '11': {
          _calValueFinal = calValueFinal;
          for (let _i = 1; _i < 6; _i++) {
            let next = String(Number(_calValueFinal) + _i);
            if (String(next).length > 1) {
              const _calValue = String(next).substring(String(next).length - 1, String(next).length);
              next = _calValue;
            }
            calValueFinal = calValueFinal + next;
          }
          calValue = calValueFinal;

          if (inputs.indexOf(s) !== (inputs.length - 1)) {
            const valueResult1 = inputs[inputs.indexOf(s) + 1].low[0];
            const valueResult2 = inputs[inputs.indexOf(s) + 1].low[1];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue2 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = 0;
            }
          }
          break;
        }
        case '12': {
          _calValueFinal = calValueFinal;
          for (let _i = 1; _i < 7; _i++) {
            let next = String(Number(_calValueFinal) + _i);
            if (String(next).length > 1) {
              const _calValue = String(next).substring(String(next).length - 1, String(next).length);
              next = _calValue;
            }
            calValueFinal = calValueFinal + next;
          }
          calValue = calValueFinal;

          if (inputs.indexOf(s) !== (inputs.length - 1)) {
            const valueResult1 = inputs[inputs.indexOf(s) + 1].low[0];
            const valueResult2 = inputs[inputs.indexOf(s) + 1].low[1];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue2 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = 0;
            }
          }
          break;
        }
        case '13': {
          _calValueFinal = calValueFinal;
          for (let _i = 1; _i < 8; _i++) {
            let next = String(Number(_calValueFinal) + _i);
            if (String(next).length > 1) {
              const _calValue = String(next).substring(String(next).length - 1, String(next).length);
              next = _calValue;
            }
            calValueFinal = calValueFinal + next;
          }
          calValue = calValueFinal;

          if (inputs.indexOf(s) !== (inputs.length - 1)) {
            const valueResult1 = inputs[inputs.indexOf(s) + 1].low[0];
            const valueResult2 = inputs[inputs.indexOf(s) + 1].low[1];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue2 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = 0;
            }
          }
          break;
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
