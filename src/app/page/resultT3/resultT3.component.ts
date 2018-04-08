import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Language} from 'angular-l10n';
import {StorageService} from '../../service/storage.service';
import {ResultModel} from '../../model/result.model';
import {InputModel} from '../../model/input.model';
import {Router} from '@angular/router';
import {TdLoadingService} from '@covalent/core';
import {Untils} from '../../shared/untils';
import {FormulaT2Service} from '../../service/formulaT2.service';
import {FormulaTService} from '../../service/formulaT.service';

@Component({
  selector: 'app-resultT3',
  templateUrl: './resultT3.component.html',
  styleUrls: ['./resultT3.component.scss']
})
export class ResultT3Component implements OnInit {
  @Language() lang: string;

  resultModel1: ResultModel[] = [];
  resultModel2: ResultModel[] = [];
  inputs: InputModel[];
  title: string;
  calType: string;
  isStop: Boolean = false;

  constructor(public _storageService: StorageService,
              public service1: FormulaTService,
              public service2: FormulaT2Service,
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
      this.getList1()
        .then((s: ResultModel[]) => {
          this.setRows(s, 0)
            .then(() => {
              this._loadingService.resolve('result');
              this.getList2().then((s: ResultModel[]) => {
                this.setRows(s, 0);
              });
            });
        });
    }
  }

  getList1() {
    return this.service1.formulaCalculateA(this.inputs);
  }

  getList2() {
    return this.service2.formulaCalculateB(this.inputs);
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
