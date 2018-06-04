import {Component, NgZone, OnInit} from '@angular/core';
import {Language} from 'angular-l10n';
import {StorageService} from '../../service/storage.service';
import {FormulaService} from '../../service/formula.service';
import {ResultModel} from '../../model/result.model';
import {InputModel} from '../../model/input.model';
import {Router} from '@angular/router';
import {TdLoadingService} from '@covalent/core';
import {Untils} from '../../shared/untils';
import {ResultPredictModel} from '../../model/result_predict.model';
import {MatDialog, MatSnackBar} from '@angular/material';
import {PredictComponent} from '../../dialog/predict/predict.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Language() lang: string;

  preCopy = true;
  copyText = '';

  predict: ResultPredictModel;
  resultModel1: ResultModel[] = [];
  resultModel2: ResultModel[] = [];
  resultModel3: ResultModel[] = [];

  resultSmallModel1: ResultModel[] = [];
  resultSmallModel2: ResultModel[] = [];
  resultSmallModel3: ResultModel[] = [];
  resultSmallModel4: ResultModel[] = [];
  resultSmallModel5: ResultModel[] = [];

  inputs: InputModel[];
  title: string;
  calType: string;
  isSmallMode = false;
  index = 1;
  indexStart = 0;

  constructor(public mDaialog: MatDialog,
              private _ngZone: NgZone,
              public snackBar: MatSnackBar,
              public _storageService: StorageService,
              public service: FormulaService,
              private _loadingService: TdLoadingService,
              private _router: Router) {

    this._loadingService.register('result');
  }

  showMessage(text: string) {
    this.snackBar.open(text, 'ปิด', {
      duration: 3000
    });
    this.preCopy = true;
  }

  copy(model: ResultModel) {
    this.copyText = model.name + ' - ' + model.summary + ' : ' + ((model.inputs.length - 2) - model.summary) + '\n';
    model.inputs.forEach(s => {
      if (model.inputs.indexOf(s) === model.inputs.length - 1) {
        this.copyText = this.copyText + 'ถัดไป = ' + model.inputs[model.inputs.indexOf(s) - 1].value + '\n';
      } else {
        if (model.inputs.indexOf(s) !== 0) {
          let sOld = model.inputs[model.inputs.indexOf(s) - 1];
          if (sOld.result) {
            this.copyText = this.copyText + s.time + ' = ' + sOld.value + ' = ' + s.up + '-' + s.low + ' เด้ง \n';
          } else {
            this.copyText = this.copyText + s.time + ' = ' + sOld.value + ' = ' + s.up + '-' + s.low + '\n';
          }
        } else {
          this.copyText = this.copyText + s.time + '\n';
        }
      }
    });
    this.preCopy = false;
  }

  async delay(milliseconds: number) {
    return new Promise<void>(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  callData() {
    console.log('callData!!');
    this._loadingService.register('resultMore');
    this.getList(this.index)
      .then((s: ResultModel[]) => {
        this.setRows(s, this.indexStart);
        this.index += 1;
        this.indexStart += 10;

        this.getList(this.index)
          .then((s2: ResultModel[]) => {
            this.setRows(s2, this.indexStart);
            this.index += 1;
            this.indexStart += 10;

            this.getList(this.index)
              .then((s3: ResultModel[]) => {
                this.setRows(s3, this.indexStart);
                this.index += 1;
                this.indexStart += 10;

                this.getList(this.index)
                  .then((s4: ResultModel[]) => {
                    this.setRows(s4, this.indexStart);
                    this.index += 1;
                    this.indexStart += 10;

                    this.getList(this.index)
                      .then((s5: ResultModel[]) => {
                        this.setRows(s5, this.indexStart);
                        this.index += 1;
                        this.indexStart += 10;
                        this._loadingService.resolve('result');
                      }).catch((reason: any) => {
                      this._loadingService.resolve('result');
                    });
                  }).catch((reason: any) => {
                  this._loadingService.resolve('result');
                });
              }).catch((reason: any) => {
              this._loadingService.resolve('result');
            });
          }).catch((reason: any) => {
          this._loadingService.resolve('result');
        });
      });
  }

  ngOnInit() {

    this.inputs = this._storageService.getListData();
    this.calType = this._storageService.getCalType();

    if (this.calType == null) {
      this.disable();
    } else {
      this.title = Untils.getCalculateTitle(this.calType);
      this.callData();
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

    this.smallResult(s, start);

    if (start == 170) {
      this.predic();
    }
    this._loadingService.resolve('resultMore');
  }

  smallResult(s: ResultModel[], start: any) {

    let _index = start;
    for (const ss of s) {
      if (_index > -1 && _index < 36) {
        this.resultSmallModel1.push(ss);
      }

      if (_index > 35 && _index < 72) {
        this.resultSmallModel2.push(ss);
      }

      if (_index > 71 && _index < 108) {
        this.resultSmallModel3.push(ss);
      }

      if (_index > 107 && _index < 144) {
        this.resultSmallModel4.push(ss);
      }

      if (_index > 143 && _index < 180) {
        this.resultSmallModel5.push(ss);
      }

      _index = _index + 1;
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
    if (this.predict.result.length > 0) {
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
    this._ngZone.run(() => {
      this._router.navigateByUrl('/');
    });
  }
}
