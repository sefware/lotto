import {Injectable} from '@angular/core';
import {InputModel} from '../model/input.model';
import {ResultModel} from '../model/result.model';
import {ResultInputModel} from '../model/result_input.model';
import {HttpClient} from '@angular/common/http';
import {ResultPredictModel} from '../model/result_predict.model';

@Injectable()
export class FormulaService {

  predict: ResultPredictModel;

  inputs = [];

  constructor(private http: HttpClient) {
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

  private static getFormulaNameHero(index: string) {
    if (index.length < 2) {
      index = '00' + index;
    }

    if (index.length < 3) {
      index = '0' + index;
    }
    return 'H' + index;
  }

  swapInput(inputs: InputModel[], calType: string) {

    if (calType === '8' || calType === '9' || calType === '10' || calType === '11' || calType === '12' || calType === '13') {
      return inputs;
    } else {
      const _input = [];
      inputs.forEach(s => {
        const _up = s.low + s.up.substr(0, 1);
        const _low = s.up.substr(1, 2);
        _input.push({
          time: s.time,
          up: _up,
          low: _low
        });
      });
      return _input;
    }
  }

  getFormula(index: number) {
    return FormulaService.getFormulaName(String(index));
  }

  getFormulaHero(index: number) {
    return FormulaService.getFormulaNameHero(String(index));
  }

  formulaCalculate(inputs: InputModel[], calType: string) {
    const resultModel: ResultModel[] = [];
    this.inputs = inputs;

    // // ร้อยบน
    // for (let _i = 0; _i < 10; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'up', '', '', 0, 0, 0, '+', '', '', _i % 10)
    //   });
    // }
    // // สิบบน
    // for (let _i = 10; _i < 20; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'up', '', '', 1, 0, 0, '+', '*', '*', _i % 10)
    //   });
    // }
    // // หน่วยบน
    // for (let _i = 20; _i < 30; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'up', '', '', 2, 0, 0, '+', '*', '*', _i % 10)
    //   });
    // }
    // // สิบล่าง
    // for (let _i = 30; _i < 40; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'low', '', '', 0, 0, 0, '+', '*', '*', _i % 10)
    //   });
    // }
    // // หน่วยล่าง
    // for (let _i = 40; _i < 50; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'low', '', '', 1, 0, 0, '+', '*', '*', _i % 10)
    //   });
    // }
    // // ร้อย + สิบบน
    // for (let _i = 50; _i < 60; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'up', 'up', '', 0, 1, 0, '+', '*', '*', _i % 10)
    //   });
    // }
    // // ร้อย + หน่วยบน
    // for (let _i = 60; _i < 70; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'up', 'up', '', 0, 2, 0, '+', '*', '', _i % 10)
    //   });
    // }
    // // ร้อย + สิบล่าง
    // for (let _i = 70; _i < 80; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'up', 'low', '', 0, 1, 0, '+', '*', '', _i % 10)
    //   });
    // }
    // // ร้อย + หน่วยล่าง
    // for (let _i = 80; _i < 90; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'up', 'low', '', 0, 1, 0, '+', '*', '', _i % 10)
    //   });
    // }
    // // สิบบน + หน่วยบน
    // for (let _i = 90; _i < 100; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'up', 'up', '', 1, 2, 0, '+', '*', '', _i % 10)
    //   });
    // }
    // // สิบบน + สิบล่าง
    // for (let _i = 100; _i < 110; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'up', 'low', '', 1, 0, 0, '+', '*', '', _i % 10)
    //   });
    // }
    // // สิบบน + หน่วยล่าง
    // for (let _i = 110; _i < 120; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'up', 'low', '', 1, 1, 0, '+', '*', '', _i % 10)
    //   });
    // }
    // // หน่วยบน + สิบล่าง
    // for (let _i = 120; _i < 130; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'up', 'low', '', 2, 0, 0, '+', '*', '', _i % 10)
    //   });
    // }
    // // หน่วยบน + หน่วยล่าง
    // for (let _i = 130; _i < 140; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'up', 'low', '', 2, 1, 0, '+', '*', '', _i % 10)
    //   });
    // }
    // // สิบล่าง + หน่วยล่าง
    // for (let _i = 140; _i < 150; _i++) {
    //   resultModel.push({
    //     name: this.getFormula(_i + 1),
    //     inputs: this.formula(calType, 'low', 'low', '', 1, 1, 0, '+', '*', '', _i % 10)
    //   });
    // }
    return new Promise((resolve) => {
      resolve(resultModel);
    });
  }

  async formulaCalculateHero(index: number, inputs: InputModel[], calType: string) {
    // this.inputs = this.swapInput(inputs, calType);
    this.inputs = inputs;
    const resultModel: ResultModel[] = [];

    switch (index) {
      case 1: {
        // ร้อยบน + สิบบน + หน่วยบน
        for (let _i = 0; _i < 10; _i++) {
          const _inputs = this.formula(calType, 'up', 'up', 'up', 0, 1, 2, '+', '+', '+', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 2: {
        // ร้อยบน + สิบบน + สิบล่าง
        for (let _i = 10; _i < 20; _i++) {

          const _inputs = this.formula(calType, 'up', 'up', 'low', 0, 1, 0, '+', '+', '+', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 3: {
        // ร้อยบน + สิบบน + หน่วยล่าง
        for (let _i = 20; _i < 30; _i++) {

          const _inputs = this.formula(calType, 'up', 'up', 'low', 0, 1, 1, '+', '+', '+', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 4: {
        // ร้อยบน + หน่วยบน + สิบล่าง
        for (let _i = 30; _i < 40; _i++) {

          const _inputs = this.formula(calType, 'up', 'up', 'low', 0, 2, 0, '+', '+', '+', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 5: {
        // ร้อยบน + สิบล่าง + หน่วยล่าง
        for (let _i = 40; _i < 50; _i++) {

          const _inputs = this.formula(calType, 'up', 'low', 'low', 0, 0, 1, '+', '+', '+', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 6: {
        // ร้อยบน + หน่วยบน + หน่วยล่าง
        for (let _i = 50; _i < 60; _i++) {
          const _inputs = this.formula(calType, 'up', 'up', 'low', 0, 2, 1, '+', '+', '+', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 7: {
        // สิบบน + หน่วยบน + สิบล่าง
        for (let _i = 60; _i < 70; _i++) {
          const _inputs = this.formula(calType, 'up', 'up', 'low', 1, 2, 0, '+', '+', '+', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 8: {
        // สิบบน + หน่วยบน + หน่วยล่าง
        for (let _i = 70; _i < 80; _i++) {
          const _inputs = this.formula(calType, 'up', 'up', 'low', 1, 2, 1, '+', '+', '+', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 9: {
        // สิบบน + สิบล่าง + หน่วยล่าง
        for (let _i = 80; _i < 90; _i++) {
          const _inputs = this.formula(calType, 'up', 'low', 'low', 1, 2, 1, '+', '+', '+', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 10: {
        // ร้อยบน + สิบบน + หน่วยบน *
        for (let _i = 90; _i < 100; _i++) {
          const _inputs = this.formula(calType, 'up', 'up', 'up', 0, 1, 2, '+', '+', '*', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 11: {
        // ร้อยบน + สิบบน + สิบล่าง *
        for (let _i = 100; _i < 110; _i++) {
          const _inputs = this.formula(calType, 'up', 'up', 'low', 0, 1, 0, '+', '+', '*', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 12: {
        // ร้อยบน + สิบบน + หน่วยล่าง *
        for (let _i = 110; _i < 120; _i++) {
          const _inputs = this.formula(calType, 'up', 'up', 'low', 0, 1, 1, '+', '+', '*', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 13: {
        // ร้อยบน + หน่วยบน + สิบล่าง *
        for (let _i = 120; _i < 130; _i++) {
          const _inputs = this.formula(calType, 'up', 'up', 'low', 0, 2, 0, '+', '+', '*', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 14: {
        // ร้อยบน + สิบล่าง + หน่วยล่าง *
        for (let _i = 130; _i < 140; _i++) {
          const _inputs = this.formula(calType, 'up', 'low', 'low', 0, 0, 1, '+', '+', '*', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 15: {
        // ร้อยบน + หน่วยบน + หน่วยล่าง *
        for (let _i = 140; _i < 150; _i++) {
          const _inputs = this.formula(calType, 'up', 'up', 'low', 0, 2, 1, '+', '+', '*', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 16: {
        // สิบบน + หน่วยบน + สิบล่าง *
        for (let _i = 150; _i < 160; _i++) {
          const _inputs = this.formula(calType, 'up', 'up', 'low', 1, 2, 0, '+', '+', '*', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 17: {
        // สิบบน + หน่วยบน + หน่วยล่าง *
        for (let _i = 160; _i < 170; _i++) {
          const _inputs = this.formula(calType, 'up', 'up', 'low', 1, 2, 1, '+', '+', '*', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          });
        }
        break;
      }
      case 18: {
        // สิบบน + สิบล่าง + หน่วยล่าง *
        for (let _i = 170; _i < 180; _i++) {
          const _inputs = this.formula(calType, 'up', 'low', 'low', 1, 0, 1, '+', '+', '*', _i % 10);
          let summary = 0;
          _inputs.forEach(s => {
            if (s.resultCount > 0) {
              summary = summary + 1;
            }
          });

          resultModel.push({
            name: this.getFormulaHero(_i + 1),
            inputs: _inputs,
            summary: summary
          })
          ;
        }
        break;
      }
    }

    return new Promise((resolve) => {
      resolve(resultModel);
    });
  }

  formula(calType: String,
          type1: string,
          type2: string,
          type3: string,
          position1: number,
          position2: number,
          position3: number,
          positionOperaion1: string,
          positionOperaion2: string,
          positionOperaion3: string,
          value: number) {

    const resultList: ResultInputModel[] = [];
    this.inputs.forEach(s => {
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

      const calValue1 = this.calSingleValue(a, position1, positionOperaion1, value);
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

        const calValue2 = this.calSingleValue(b, position2, positionOperaion2, Number(calValue));
        calValue = String(calValue2);

        if (type3 !== '') {
          let c = '';
          switch (type3) {
            case 'up': {
              c = s.up;
              break;
            }
            case 'low': {
              c = s.low;
              break;
            }
          }

          const calValue3 = this.calSingleValue(c, position3, positionOperaion3, Number(calValue));
          calValue = String(calValue3);
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
          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            indexResultUp = this.inputs[this.inputs.indexOf(s) + 1].up.indexOf(String(calValue));
            indexResultLow = this.inputs[this.inputs.indexOf(s) + 1].low.indexOf(String(calValue));

            if ((indexResultUp >= 0) || (indexResultLow >= 0)) {
              sumResult = true;
              const trueCountUp = this.inputs[this.inputs.indexOf(s) + 1].up.match(new RegExp(String(calValue), 'g'));
              const trueCountLow = this.inputs[this.inputs.indexOf(s) + 1].low.match(new RegExp(String(calValue), 'g'));
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResultUp = this.inputs[this.inputs.indexOf(s) + 1].up[1];

            const checkValue = calValue.match(new RegExp(valueResultUp, 'g'));
            if (checkValue && checkValue.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResultUp = this.inputs[this.inputs.indexOf(s) + 1].up[2];

            const checkValue = calValue.match(new RegExp(valueResultUp, 'g'));
            if (checkValue && checkValue.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResultUp = this.inputs[this.inputs.indexOf(s) + 1].low[0];

            const checkValue = calValue.match(new RegExp(valueResultUp, 'g'));
            if (checkValue && checkValue.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResultUp = this.inputs[this.inputs.indexOf(s) + 1].low[1];

            const checkValue = calValue.match(new RegExp(valueResultUp, 'g'));
            if (checkValue && checkValue.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResult1 = this.inputs[this.inputs.indexOf(s) + 1].up[1];
            const valueResult2 = this.inputs[this.inputs.indexOf(s) + 1].up[2];

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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResult1 = this.inputs[this.inputs.indexOf(s) + 1].low[0];
            const valueResult2 = this.inputs[this.inputs.indexOf(s) + 1].low[1];

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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResult1 = this.inputs[this.inputs.indexOf(s) + 1].up[1];
            const valueResult2 = this.inputs[this.inputs.indexOf(s) + 1].up[2];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue2 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResult1 = this.inputs[this.inputs.indexOf(s) + 1].up[1];
            const valueResult2 = this.inputs[this.inputs.indexOf(s) + 1].up[2];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue2 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResult1 = this.inputs[this.inputs.indexOf(s) + 1].up[1];
            const valueResult2 = this.inputs[this.inputs.indexOf(s) + 1].up[2];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue2 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResult1 = this.inputs[this.inputs.indexOf(s) + 1].low[0];
            const valueResult2 = this.inputs[this.inputs.indexOf(s) + 1].low[1];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue2 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResult1 = this.inputs[this.inputs.indexOf(s) + 1].low[0];
            const valueResult2 = this.inputs[this.inputs.indexOf(s) + 1].low[1];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue2 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResult1 = this.inputs[this.inputs.indexOf(s) + 1].low[0];
            const valueResult2 = this.inputs[this.inputs.indexOf(s) + 1].low[1];

            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue1 && checkValue2 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
            }
          }
          break;
        }
        case '14': {
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResult0 = this.inputs[this.inputs.indexOf(s) + 1].up[0];
            const valueResult1 = this.inputs[this.inputs.indexOf(s) + 1].up[1];
            const valueResult2 = this.inputs[this.inputs.indexOf(s) + 1].up[2];

            const checkValue0 = calValue.match(new RegExp(valueResult0, 'g'));
            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue0 && checkValue1 && checkValue2 && checkValue0.length > 0 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
            }
          }
          break;
        }
        case '15': {
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResult0 = this.inputs[this.inputs.indexOf(s) + 1].up[0];
            const valueResult1 = this.inputs[this.inputs.indexOf(s) + 1].up[1];
            const valueResult2 = this.inputs[this.inputs.indexOf(s) + 1].up[2];

            const checkValue0 = calValue.match(new RegExp(valueResult0, 'g'));
            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue0 && checkValue1 && checkValue2 && checkValue0.length > 0 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
            }
          }
          break;
        }
        case '16': {
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResult0 = this.inputs[this.inputs.indexOf(s) + 1].up[0];
            const valueResult1 = this.inputs[this.inputs.indexOf(s) + 1].up[1];
            const valueResult2 = this.inputs[this.inputs.indexOf(s) + 1].up[2];

            const checkValue0 = calValue.match(new RegExp(valueResult0, 'g'));
            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue0 && checkValue1 && checkValue2 && checkValue0.length > 0 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
            }
          }
          break;
        }

        case '17': {
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

          if (this.inputs.indexOf(s) !== (this.inputs.length - 1)) {
            const valueResult0 = this.inputs[this.inputs.indexOf(s) + 1].up[0];
            const valueResult1 = this.inputs[this.inputs.indexOf(s) + 1].up[1];
            const valueResult2 = this.inputs[this.inputs.indexOf(s) + 1].up[2];

            const checkValue0 = calValue.match(new RegExp(valueResult0, 'g'));
            const checkValue1 = calValue.match(new RegExp(valueResult1, 'g'));
            const checkValue2 = calValue.match(new RegExp(valueResult2, 'g'));

            if (checkValue0 && checkValue1 && checkValue2 && checkValue0.length > 0 && checkValue1.length > 0 && checkValue2.length > 0) {
              sumResult = true;
              SumresultCount = SumresultCount + 1;
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
        if (Number(value) !== 0) {
          calValue = Number(value) * operationValue;
        } else {
          calValue = operationValue;
        }
        break;
      }
    }
    return calValue;
  }
}
