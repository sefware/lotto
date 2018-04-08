import {Component, OnInit} from '@angular/core';
import {Language} from 'angular-l10n';
import {StorageService} from '../../service/storage.service';
import {FormulaService} from '../../service/formula.service';
import {ResultModel} from '../../model/result.model';
import {InputModel} from '../../model/input.model';
import {Router} from '@angular/router';
import {TdLoadingService} from '@covalent/core';
import {Untils} from '../../shared/untils';
import {ResultPredictModel} from '../../model/result_predict.model';
import {MatDialog} from '@angular/material';
import {PredictComponent} from '../../dialog/predict/predict.component';
import {ConfirmComponent, DialogModel} from '../../dialog/confirm/confirm.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Language() lang: string;

  predict: ResultPredictModel;
  resultModel1: ResultModel[] = [];
  resultModel2: ResultModel[] = [];
  resultModel3: ResultModel[] = [];
  inputs: InputModel[];
  title: string;
  calType: string;
  isStop: Boolean = false;

  constructor(public mDaialog: MatDialog,
              public _storageService: StorageService,
              public service: FormulaService,
              private _loadingService: TdLoadingService,
              private _router: Router) {

    this._loadingService.register('result');
  }

  async delay(milliseconds: number) {
    return new Promise<void>(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  ngOnInit() {

    this.inputs = this._storageService.getListData();
    this.calType = this._storageService.getCalType();

    if (this.calType == null) {
      this.disable();
    } else {
      this.title = Untils.getCalculateTitle(this.calType);

      this.getList(1)
        .then((s: ResultModel[]) => {
          this.setRows(s, 0)
            .then(() => {
              this._loadingService.resolve('result');
            });
          return new Promise((resolve,) => {
            if (!this.isStop) {
              resolve(this.getList(2));
            }
          });
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 10);
          if (!this.isStop) {
            return this.getList(3);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 20);
          if (!this.isStop) {
            return this.getList(4);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 30);
          if (!this.isStop) {
            return this.getList(5);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 40);
          if (!this.isStop) {
            return this.getList(6);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 50);
          if (!this.isStop) {
            return this.getList(7);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 60);
          if (!this.isStop) {
            return this.getList(8);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 70);
          if (!this.isStop) {
            return this.getList(9);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 80);
          if (!this.isStop) {
            return this.getList(10);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 90);
          if (!this.isStop) {
            return this.getList(11);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 100);
          if (!this.isStop) {
            return this.getList(12);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 110);
          if (!this.isStop) {
            return this.getList(13);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 120);
          if (!this.isStop) {
            return this.getList(14);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 130);
          if (!this.isStop) {
            return this.getList(15);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 140);
          if (!this.isStop) {
            return this.getList(16);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 150);
          if (!this.isStop) {
            return this.getList(17);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 160);
          if (!this.isStop) {
            return this.getList(18);
          }
        })
        .then((s: ResultModel[]) => {
          this.setRows(s, 170);
        });
    }
  }


  getList(index: number) {
    return this.service.formulaCalculateHero(index, this.inputs, this.calType);
  }

  async setRows(s: ResultModel[], start: Number) {

    await this.delay(500);

    await this.setRow(s, 1, start);

    await this.setRow(s, 2, start);

    await this.setRow(s, 3, start);

    if (start == 170) {
      this.predic();
    }
  }

  async setRow(s: ResultModel[], row: Number, start: any) {

    let _index = start;

    switch (row) {
      case 1 : {
        for (const ss of s) {
          if (_index % 3 === 0) {
            this.resultModel1.push(ss);
          }
          _index += 1;
        }
        break;
      }
      case 2 : {
        for (const ss of s) {
          if (_index % 3 === 1) {
            this.resultModel2.push(ss);
          }
          _index += 1;
        }
        break;
      }
      case 3 : {
        for (const ss of s) {
          if (_index % 3 === 2) {
            this.resultModel3.push(ss);
          }
          _index += 1;
        }
        break;
      }
    }
  }

  predic() {
    this.predict = new ResultPredictModel({
      result: [],
      resultPredict1: [],
      resultPredict2: [],
      resultPredict3: []
    });

    let result: number[] = [];
    let resultPredict1: number[] = [];
    let resultPredict2: number[] = [];
    let resultPredict3: number[] = [];

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(s => {
      result[s] = 0;
      resultPredict1[s] = 0;
      resultPredict2[s] = 0;
      resultPredict3[s] = 0;
    });

    this.resultModel1.forEach(s => {
      switch (Number(s.inputs[s.inputs.length - 2].value)) {
        case 0: {
          result[0] += 1;
          break;
        }
        case 1: {
          result[1] += 1;
          break;
        }
        case 2: {
          result[2] += 1;
          break;
        }
        case 3: {
          result[3] += 1;
          break;
        }
        case 4: {
          result[4] += 1;
          break;
        }
        case 5: {
          result[5] += 1;
          break;
        }
        case 6: {
          result[6] += 1;
          break;
        }
        case 7: {
          result[7] += 1;
          break;
        }
        case 8: {
          result[8] += 1;
          break;
        }
        case 9: {
          result[9] += 1;
          break;
        }
      }
    });

    this.resultModel2.forEach(s => {
      switch (Number(s.inputs[s.inputs.length - 2].value)) {
        case 0: {
          result[0] += 1;
          break;
        }
        case 1: {
          result[1] += 1;
          break;
        }
        case 2: {
          result[2] += 1;
          break;
        }
        case 3: {
          result[3] += 1;
          break;
        }
        case 4: {
          result[4] += 1;
          break;
        }
        case 5: {
          result[5] += 1;
          break;
        }
        case 6: {
          result[6] += 1;
          break;
        }
        case 7: {
          result[7] += 1;
          break;
        }
        case 8: {
          result[8] += 1;
          break;
        }
        case 9: {
          result[9] += 1;
          break;
        }
      }
    });

    this.resultModel3.forEach(s => {
      switch (Number(s.inputs[s.inputs.length - 2].value)) {
        case 0: {
          result[0] += 1;
          break;
        }
        case 1: {
          result[1] += 1;
          break;
        }
        case 2: {
          result[2] += 1;
          break;
        }
        case 3: {
          result[3] += 1;
          break;
        }
        case 4: {
          result[4] += 1;
          break;
        }
        case 5: {
          result[5] += 1;
          break;
        }
        case 6: {
          result[6] += 1;
          break;
        }
        case 7: {
          result[7] += 1;
          break;
        }
        case 8: {
          result[8] += 1;
          break;
        }
        case 9: {
          result[9] += 1;
          break;
        }
      }
    });

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(s => {
      console.log('ผลรวม ' + s + ' : ' + result[s]);
    });


    console.log('ก่อนหน้า 1 ตัว ');

    this.resultModel1.forEach(s => {
      if (s.inputs[s.inputs.length - 3].result) {
        switch (Number(s.inputs[s.inputs.length - 2].value)) {
          case 0: {
            resultPredict1[0] += 1;
            break;
          }
          case 1: {
            resultPredict1[1] += 1;
            break;
          }
          case 2: {
            resultPredict1[2] += 1;
            break;
          }
          case 3: {
            resultPredict1[3] += 1;
            break;
          }
          case 4: {
            resultPredict1[4] += 1;
            break;
          }
          case 5: {
            resultPredict1[5] += 1;
            break;
          }
          case 6: {
            resultPredict1[6] += 1;
            break;
          }
          case 7: {
            resultPredict1[7] += 1;
            break;
          }
          case 8: {
            resultPredict1[8] += 1;
            break;
          }
          case 9: {
            resultPredict1[9] += 1;
            break;
          }
        }
      }
    });

    this.resultModel2.forEach(s => {
      if (s.inputs[s.inputs.length - 3].result) {
        switch (Number(s.inputs[s.inputs.length - 2].value)) {
          case 0: {
            resultPredict1[0] += 1;
            break;
          }
          case 1: {
            resultPredict1[1] += 1;
            break;
          }
          case 2: {
            resultPredict1[2] += 1;
            break;
          }
          case 3: {
            resultPredict1[3] += 1;
            break;
          }
          case 4: {
            resultPredict1[4] += 1;
            break;
          }
          case 5: {
            resultPredict1[5] += 1;
            break;
          }
          case 6: {
            resultPredict1[6] += 1;
            break;
          }
          case 7: {
            resultPredict1[7] += 1;
            break;
          }
          case 8: {
            resultPredict1[8] += 1;
            break;
          }
          case 9: {
            resultPredict1[9] += 1;
            break;
          }
        }
      }
    });

    this.resultModel3.forEach(s => {
      if (s.inputs[s.inputs.length - 3].result) {
        switch (Number(s.inputs[s.inputs.length - 2].value)) {
          case 0: {
            resultPredict1[0] += 1;
            break;
          }
          case 1: {
            resultPredict1[1] += 1;
            break;
          }
          case 2: {
            resultPredict1[2] += 1;
            break;
          }
          case 3: {
            resultPredict1[3] += 1;
            break;
          }
          case 4: {
            resultPredict1[4] += 1;
            break;
          }
          case 5: {
            resultPredict1[5] += 1;
            break;
          }
          case 6: {
            resultPredict1[6] += 1;
            break;
          }
          case 7: {
            resultPredict1[7] += 1;
            break;
          }
          case 8: {
            resultPredict1[8] += 1;
            break;
          }
          case 9: {
            resultPredict1[9] += 1;
            break;
          }
        }
      }
    });

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(s => {
      let persent = (resultPredict1[s] * 100) / result[s];
      console.log('ผลรวม ก่อนหน้า 1 ตัวเลข ' + s + ' : ' + resultPredict1[s] + ' (' + persent.toFixed(2) + '%)');
    });

    console.log('ก่อนหน้า 2 ตัว ');

    this.resultModel1.forEach(s => {
      if (s.inputs[s.inputs.length - 3].result && s.inputs[s.inputs.length - 4].result) {
        switch (Number(s.inputs[s.inputs.length - 2].value)) {
          case 0: {
            resultPredict2[0] += 1;
            break;
          }
          case 1: {
            resultPredict2[1] += 1;
            break;
          }
          case 2: {
            resultPredict2[2] += 1;
            break;
          }
          case 3: {
            resultPredict2[3] += 1;
            break;
          }
          case 4: {
            resultPredict2[4] += 1;
            break;
          }
          case 5: {
            resultPredict2[5] += 1;
            break;
          }
          case 6: {
            resultPredict2[6] += 1;
            break;
          }
          case 7: {
            resultPredict2[7] += 1;
            break;
          }
          case 8: {
            resultPredict2[8] += 1;
            break;
          }
          case 9: {
            resultPredict2[9] += 1;
            break;
          }
        }
      }
    });

    this.resultModel2.forEach(s => {
      if (s.inputs[s.inputs.length - 3].result && s.inputs[s.inputs.length - 4].result) {
        switch (Number(s.inputs[s.inputs.length - 2].value)) {
          case 0: {
            resultPredict2[0] += 1;
            break;
          }
          case 1: {
            resultPredict2[1] += 1;
            break;
          }
          case 2: {
            resultPredict2[2] += 1;
            break;
          }
          case 3: {
            resultPredict2[3] += 1;
            break;
          }
          case 4: {
            resultPredict2[4] += 1;
            break;
          }
          case 5: {
            resultPredict2[5] += 1;
            break;
          }
          case 6: {
            resultPredict2[6] += 1;
            break;
          }
          case 7: {
            resultPredict2[7] += 1;
            break;
          }
          case 8: {
            resultPredict2[8] += 1;
            break;
          }
          case 9: {
            resultPredict2[9] += 1;
            break;
          }
        }
      }
    });

    this.resultModel3.forEach(s => {
      if (s.inputs[s.inputs.length - 3].result && s.inputs[s.inputs.length - 4].result) {
        switch (Number(s.inputs[s.inputs.length - 2].value)) {
          case 0: {
            resultPredict1[0] += 1;
            break;
          }
          case 1: {
            resultPredict2[1] += 1;
            break;
          }
          case 2: {
            resultPredict2[2] += 1;
            break;
          }
          case 3: {
            resultPredict2[3] += 1;
            break;
          }
          case 4: {
            resultPredict2[4] += 1;
            break;
          }
          case 5: {
            resultPredict2[5] += 1;
            break;
          }
          case 6: {
            resultPredict2[6] += 1;
            break;
          }
          case 7: {
            resultPredict2[7] += 1;
            break;
          }
          case 8: {
            resultPredict2[8] += 1;
            break;
          }
          case 9: {
            resultPredict2[9] += 1;
            break;
          }
        }
      }
    });

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(s => {
      let persent = (resultPredict2[s] * 100) / result[s];
      console.log('ผลรวม ก่อนหน้า 2 ตัวเลข ' + s + ' : ' + resultPredict2[s] + ' (' + persent.toFixed(2) + '%)');
    });

    console.log('ก่อนหน้า 3 ตัว ');

    this.resultModel1.forEach(s => {
      if (s.inputs[s.inputs.length - 3].result && s.inputs[s.inputs.length - 4].result && s.inputs[s.inputs.length - 5].result) {
        switch (Number(s.inputs[s.inputs.length - 2].value)) {
          case 0: {
            resultPredict3[0] += 1;
            break;
          }
          case 1: {
            resultPredict3[1] += 1;
            break;
          }
          case 2: {
            resultPredict3[2] += 1;
            break;
          }
          case 3: {
            resultPredict3[3] += 1;
            break;
          }
          case 4: {
            resultPredict3[4] += 1;
            break;
          }
          case 5: {
            resultPredict3[5] += 1;
            break;
          }
          case 6: {
            resultPredict3[6] += 1;
            break;
          }
          case 7: {
            resultPredict3[7] += 1;
            break;
          }
          case 8: {
            resultPredict3[8] += 1;
            break;
          }
          case 9: {
            resultPredict3[9] += 1;
            break;
          }
        }
      }
    });

    this.resultModel2.forEach(s => {
      if (s.inputs[s.inputs.length - 3].result && s.inputs[s.inputs.length - 4].result && s.inputs[s.inputs.length - 5].result) {
        switch (Number(s.inputs[s.inputs.length - 2].value)) {
          case 0: {
            resultPredict3[0] += 1;
            break;
          }
          case 1: {
            resultPredict3[1] += 1;
            break;
          }
          case 2: {
            resultPredict3[2] += 1;
            break;
          }
          case 3: {
            resultPredict3[3] += 1;
            break;
          }
          case 4: {
            resultPredict3[4] += 1;
            break;
          }
          case 5: {
            resultPredict3[5] += 1;
            break;
          }
          case 6: {
            resultPredict3[6] += 1;
            break;
          }
          case 7: {
            resultPredict3[7] += 1;
            break;
          }
          case 8: {
            resultPredict3[8] += 1;
            break;
          }
          case 9: {
            resultPredict3[9] += 1;
            break;
          }
        }
      }
    });

    this.resultModel3.forEach(s => {
      if (s.inputs[s.inputs.length - 3].result && s.inputs[s.inputs.length - 4].result && s.inputs[s.inputs.length - 5].result) {
        switch (Number(s.inputs[s.inputs.length - 2].value)) {
          case 0: {
            resultPredict3[0] += 1;
            break;
          }
          case 1: {
            resultPredict3[1] += 1;
            break;
          }
          case 2: {
            resultPredict3[2] += 1;
            break;
          }
          case 3: {
            resultPredict3[3] += 1;
            break;
          }
          case 4: {
            resultPredict3[4] += 1;
            break;
          }
          case 5: {
            resultPredict3[5] += 1;
            break;
          }
          case 6: {
            resultPredict3[6] += 1;
            break;
          }
          case 7: {
            resultPredict3[7] += 1;
            break;
          }
          case 8: {
            resultPredict3[8] += 1;
            break;
          }
          case 9: {
            resultPredict3[9] += 1;
            break;
          }
        }
      }
    });

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(s => {
      let persent = (resultPredict3[s] * 100) / result[s];
      console.log('ผลรวม ก่อนหน้า 3 ตัวเลข ' + s + ' : ' + resultPredict3[s] + ' (' + persent.toFixed(2) + '%)');
    });


    this.predict.result = result;
    this.predict.resultPredict1 = resultPredict1;
    this.predict.resultPredict2 = resultPredict2;
    this.predict.resultPredict3 = resultPredict3;

  }

  openDialogPredict() {
    if(this.predict.result.length > 0){
      this.mDaialog.open(PredictComponent, {
          data: this.predict,
          height: 'auto',
          width: '250px',
        }
      ).afterClosed().subscribe(() => {

        }
      );
    }
  }

  disable() {
    this.isStop = true;
    this._router.navigateByUrl('/');
    // window.close();
  }
}
