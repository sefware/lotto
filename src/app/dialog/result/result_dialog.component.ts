import {Component, Inject} from '@angular/core';
import {Language} from 'angular-l10n';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {InputModel} from '../../model/input.model';
import {FormulaService} from '../../service/formula.service';
import {ResultModel} from '../../model/result.model';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result_dialog.component.html',
  styleUrls: ['./result_dialog.component.scss']
})

export class ResultDialogComponent {
  @Language() lang: string;

  resultModel: ResultModel[] = [];
  resultModel1: ResultModel[] = [];
  resultModel2: ResultModel[] = [];
  resultModel3: ResultModel[] = [];
  data: any;
  inputs: InputModel[];
  title: string;

  constructor(public _storageService: StorageService,
              public service: FormulaService,
              public dialogRef: MatDialogRef<ResultDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public mdData: any) {

  }

  //   this.data = this.mdData;
  //
  //   this.inputs = this._storageService.getListData();
  //
  //   this.resultModel = this.service.formulaCalculate(this.inputs, this.data.calType);
  //
  //   this.resultModel.forEach(s => {
  //     const _index = this.resultModel.indexOf(s);
  //     if (_index % 3 === 0) {
  //       this.resultModel1.push(s);
  //     }
  //     if (_index % 3 === 1) {
  //       this.resultModel2.push(s);
  //     }
  //     if (_index % 3 === 2) {
  //       this.resultModel3.push(s);
  //     }
  //   });
  //
  //   this.title = Untils.getCalculateTitle(this.data.calType);
  // }
  //
  // disable() {
  //   this.dialogRef.close();
  // }

}
