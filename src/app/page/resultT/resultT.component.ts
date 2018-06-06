import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Language} from 'angular-l10n';
import {StorageService} from '../../service/storage.service';
import {ResultModel} from '../../model/result.model';
import {InputModel} from '../../model/input.model';
import {Router} from '@angular/router';
import {TdLoadingService} from '@covalent/core';
import {Untils} from '../../shared/untils';
import {FormulaTService} from '../../service/formulaT.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-resultT',
  templateUrl: './resultT.component.html',
  styleUrls: ['./resultT.component.scss']
})
export class ResultTComponent implements OnInit {
  @Language() lang: string;

  resultModel1: ResultModel[] = [];
  resultModel2: ResultModel[] = [];
  inputs: InputModel[];
  title: string;
  calType: string;
  isStop: Boolean = false;

  constructor(public _storageService: StorageService,
              public service: FormulaTService,
              public snackBar: MatSnackBar,
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
      this.getListA()
        .then((s: ResultModel[]) => {
          this.setRows(s, 0)
            .then(() => {
              this._loadingService.resolve('result');
              this.getListB().then((s: ResultModel[]) => {
                this.setRows(s, 0);
              });
            });
        });
    }
  }

  preCopy = true;
  copyText = '';
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

  getListA() {
    return this.service.formulaCalculateA(this.inputs);
  }

  getListB() {
    return this.service.formulaCalculateB(this.inputs);
  }

  async setRows(s: ResultModel[], start: Number) {

    await this.delay(500);

    await this.setRow(s, 1, start);

    await this.setRow(s, 2, start);

  }

  async setRow(s: ResultModel[], row: Number, start: any) {

    let _index = start;

    switch (row) {
      case 1 : {
        for (const ss of s) {
          if (_index % 2 === 0) {
            this.resultModel1.push(ss);
          }
          _index += 1;
        }
        break;
      }
      case 2 : {
        for (const ss of s) {
          if (_index % 2 === 1) {
            this.resultModel2.push(ss);
          }
          _index += 1;
        }
        break;
      }
    }
  }

  disable() {
    this.isStop = true;
    this._router.navigateByUrl('/');
  }
}
