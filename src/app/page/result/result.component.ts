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

  resultModel: ResultModel[] = [];
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

      this.getList(1)
        .then((s: ResultModel[]) => {
          this.setRows(s)
            .then(() => {
              this._loadingService.resolve('result');
            });
          return new Promise((resolve) => {
            resolve(this.getList(2));
          });
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(3);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(4);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(5);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(6);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(7);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(8);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(9);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(10);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(11);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(12);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(13);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(14);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(15);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(16);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(17);
        })
        .then((s: ResultModel[]) => {
          this.setRows(s);
          return this.getList(18);
        });
    }
  }


  getList(index: number) {
    return this.service.formulaCalculateHero(index, this.inputs, this.calType);
  }

  async setRows(s: ResultModel[]) {

    await this.delay(500);

    await this.setRow(s, 1);

    await this.setRow(s, 2);

    await this.setRow(s, 3);
  }

  async setRow(s: ResultModel[], row: Number) {

    let _index = 0;

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

  disable() {
    this._router.navigateByUrl('/');
  }
}
