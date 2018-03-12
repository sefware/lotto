import {Component, OnInit} from '@angular/core';
import {Language} from 'angular-l10n';
import {StorageService} from '../../service/storage.service';
import {FormulaService} from '../../service/formula.service';
import {ResultModel} from '../../model/result.model';
import {InputModel} from '../../model/input.model';
import {Router} from '@angular/router';
import {TdLoadingService} from '@covalent/core';
import {Untils} from '../../shared/untils';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Language() lang: string;

  resultModel1: ResultModel[] = [];
  resultModel2: ResultModel[] = [];
  resultModel3: ResultModel[] = [];
  inputs: InputModel[];
  title: string;
  calType: string;

  constructor(public _storageService: StorageService,
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

      this.service.formulaCalculateHero(this.inputs, this.calType).then((s: ResultModel[]) => {
        this.setRows(s).then(() => {
           this._loadingService.resolve('result');
        });
      });
    }
  }

  async setRows(s: ResultModel[]) {

    await this.delay(500);

    await this.setRow(s, 1).then((s1: ResultModel[]) => {
      this.resultModel1 = s1;
    });

    await this.setRow(s, 2).then((s2: ResultModel[]) => {
      this.resultModel2 = s2;
    });

    await this.setRow(s, 3).then((s3: ResultModel[]) => {
      this.resultModel3 = s3;
    });
  }

  async setRow(s: ResultModel[], row: Number) {

    const _resultModel: ResultModel[] = [];

    let _index = 0;

    switch (row) {
      case 1 : {
        for (const ss of s) {
          if (_index % 3 === 0) {
            _resultModel.push(ss);
          }
          _index += 1;
        }
        break;
      }
      case 2 : {
        for (const ss of s) {
          if (_index % 3 === 1) {
            _resultModel.push(ss);
          }
          _index += 1;
        }
        break;
      }
      case 3 : {
        for (const ss of s) {
          if (_index % 3 === 2) {
            _resultModel.push(ss);
          }
          _index += 1;
        }
        break;
      }
    }

    return new Promise((resolve) => {
      resolve(_resultModel);
    });
  }

  disable() {
    this._router.navigateByUrl('/');
  }
}
