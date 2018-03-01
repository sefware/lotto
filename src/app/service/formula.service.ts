import {Injectable} from '@angular/core';
import {InputModel} from '../model/input.model';
import {ResultModel} from '../model/result.model';
import {ResultInputModel} from '../model/result_input.model';

@Injectable()
export class FormulaService {

  constructor() {

  }

  formulaName = [
    'R001',
    'R002',
    'R003',
    'R004',
    'R005',
    'R006',
    'R007',
    'R008',
    'R009',
    'R010',
    'R011',
    'R012',
    'R013',
    'R014',
    'R015',
    'R016',
    'R017',
    'R018',
    'R019',
    'R020',
    'R021',
    'R022',
    'R023',
    'R024',
    'R025',
    'R026',
    'R027',
    'R028',
    'R029',
    'R030',
    'R031',
    'R032',
    'R033',
    'R034',
    'R035',
    'R036',
    'R037',
    'R038',
    'R039',
    'R040',
    'R041',
    'R042',
    'R043',
    'R044',
    'R045',
    'R046',
    'R047',
    'R048',
    'R049',
    'R050',
    'R051',
    'R052',
    'R053',
    'R054',
    'R055',
    'R056',
    'R057',
    'R058',
    'R059',
    'R060',
    'R061',
    'R062',
    'R063',
    'R064',
    'R065',
    'R066',
    'R067',
    'R068',
    'R069',
    'R070',
    'R071',
    'R072',
    'R073',
    'R074',
    'R075',
    'R076',
    'R077',
    'R078',
    'R079',
    'R080',
  ];

  getFormula(index: number) {
    return this.formulaName[index - 1];
  }

  formulaCalculate(inputs: InputModel[]) {
    const resultModel: ResultModel[] = [];
    this.formulaName.forEach(s => {
      switch (s) {
        case this.getFormula(1): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 0, '+')
          });
          break;
        }
        case this.getFormula(2): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 1, '+')
          });
          break;
        }
        case this.getFormula(3): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 2, '+')
          });
          break;
        }
        case this.getFormula(4): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 3, '+')
          });
          break;
        }
        case this.getFormula(5): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 4, '+')
          });
          break;
        }
        case this.getFormula(6): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 5, '+')
          });
          break;
        }
        case this.getFormula(7): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 6, '+')
          });
          break;
        }
        case this.getFormula(8): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 7, '+')
          });
          break;
        }
        case this.getFormula(9): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 8, '+')
          });
          break;
        }
        case this.getFormula(10): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 9, '+')
          });
          break;
        }
        case this.getFormula(11): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 2, 0, '+')
          });
          break;
        }
        case this.getFormula(12): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 2, 1, '+')
          });
          break;
        }
        case this.getFormula(13): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 2, 2, '+')
          });
          break;
        }
        case this.getFormula(14): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 2, 3, '+')
          });
          break;
        }
        case this.getFormula(15): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 2, 4, '+')
          });
          break;
        }
        case this.getFormula(16): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 2, 5, '+')
          });
          break;
        }
        case this.getFormula(17): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 2, 6, '+')
          });
          break;
        }
        case this.getFormula(18): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 2, 7, '+')
          });
          break;
        }
        case this.getFormula(19): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 2, 8, '+')
          });
          break;
        }
        case this.getFormula(20): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 2, 9, '+')
          });
          break;
        }
        case this.getFormula(21): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 0, '+')
          });
          break;
        }
        case this.getFormula(22): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 1, '+')
          });
          break;
        }
        case this.getFormula(23): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 2, '+')
          });
          break;
        }
        case this.getFormula(24): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 3, '+')
          });
          break;
        }
        case this.getFormula(25): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 4, '+')
          });
          break;
        }
        case this.getFormula(26): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 5, '+')
          });
          break;
        }
        case this.getFormula(27): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 6, '+')
          });
          break;
        }
        case this.getFormula(28): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 7, '+')
          });
          break;
        }
        case this.getFormula(29): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 8, '+')
          });
          break;
        }
        case this.getFormula(30): {
          resultModel.push({
            name: s,
            inputs: this.formula(inputs, 'up', 1, 9, '+')
          });
          break;
        }
      }
    });
    return resultModel;
  }

  formula(inputs: InputModel[], type: string, position: number, value: number, cal: string) {
    const resultList: ResultInputModel[] = [];
    inputs.forEach(s => {
      let a = '';

      switch (type) {
        case 'up': {
          a = String(s.up);
          break;
        }
        case 'low': {
          a = String(s.low);
          break;
        }
      }

      switch (position) {
        case 1: {
          a = a.substring(0, 1);
          break;
        }
        case 2: {
          a = a.substring(1, 2);
          break;
        }
        case 3: {
          a = a.substring(2, 3);
          break;
        }
      }

      let calValue = 0;
      switch (cal) {
        case '+': {
          calValue = Number(a) + value;
          break;
        }
        case '-': {
          calValue = Number(a) - value;
          break;
        }
        case '*': {
          calValue = Number(a) * value;
          break;
        }
      }

      if (String(calValue).length > 1) {
        const _calValue = String(calValue).substring(String(calValue).length - 1, String(calValue).length);
        calValue = Number(_calValue);
      }

      let sumResult = false;
      let SumresultCount = 0;
      if ((String(s.up).indexOf(String(calValue)) >= 0) || (String(s.low).indexOf(String(calValue)) >= 0)) {
        sumResult = true;
        // SumresultCount = SumresultCount + (String(s.up).match(new RegExp(String(calValue), 'g'))).length == null ? (String(s.up).match(new RegExp(String(calValue), 'g'))).length : 0;
        // SumresultCount = SumresultCount + (String(s.low).match(new RegExp(String(calValue), 'g'))).length == null ? (String(s.low).match(new RegExp(String(calValue), 'g'))).length : 0;
        SumresultCount = SumresultCount;
      }

      resultList.push(<ResultInputModel>{
        time: s.time,
        up: s.up,
        low: s.low,
        value: calValue,
        result: sumResult,
        resultCount: SumresultCount
      });

    });
    return resultList;
  }
}
