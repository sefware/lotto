import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ConfirmComponent {
  @Language() lang: string;
  data: any;

  constructor(@Inject(MAT_DIALOG_DATA) public mdData: DialogModel) {
    this.data = mdData;
  }
}

export class DialogModel {

  title: string;
  type: string | null | undefined;
  content?: string | null | undefined;
  data?: string | null | undefined;
  data_title?: string | null | undefined;
  btn_cancel_text: string | null | undefined;
  btn_confirm_text?: string | null | undefined;

  constructor(params: DialogModel) {
    Object.assign(this, params);
  }
}
