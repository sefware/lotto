import {Component, OnInit} from '@angular/core';
import {Untils} from '../../shared/untils';
import {Language} from 'angular-l10n';
import {StorageService} from '../../service/storage.service';
import {FormulaService} from '../../service/formula.service';
import {ResultModel} from '../../model/result.model';
import {InputModel} from '../../model/input.model';
import {Router} from '@angular/router';
import {TdLoadingService} from '@covalent/core';

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

    this._loadingService.register();
  }

  ngOnInit() {

    this.inputs = this._storageService.getListData();
    this.calType = this._storageService.getCalType();

    if (this.calType == null) {
      this.disable();
    } else {
      this.title = Untils.getCalculateTitle(this.calType);
      this.cal().then((s: ResultModel[]) => {
        let _index = 0;
        for (const ss of s) {
          if (_index % 3 === 0) {
            this.resultModel1.push(ss);
          }
          if (_index % 3 === 1) {
            this.resultModel2.push(ss);
          }
          if (_index % 3 === 2) {
            this.resultModel3.push(ss);
          }
          _index += 1;
        }
        this._loadingService.resolve();
      });
    }
  }

  cal() {
    return new Promise((resolve) => {
      resolve(this.service.formulaCalculateHero(this.inputs, this.calType));
    });
  }


  disable() {
    this._router.navigateByUrl('/');
  }
}
