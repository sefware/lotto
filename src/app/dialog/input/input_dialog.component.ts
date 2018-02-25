import {Component, Inject} from '@angular/core';
import {Language} from 'angular-l10n';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input_dialog.component.html',
  styleUrls: ['./input_dialog.component.scss']
})

export class InputDialogComponent {
  @Language() lang: string;

  data: any;

  constructor(@Inject(MAT_DIALOG_DATA) public mdData: any) {
    console.log(mdData);
    this.data = mdData;
  }
}
