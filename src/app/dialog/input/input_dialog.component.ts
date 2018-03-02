import {Component, Inject} from '@angular/core';
import {Language} from 'angular-l10n';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input_dialog.component.html',
  styleUrls: ['./input_dialog.component.scss']
})

export class InputDialogComponent {
  @Language() lang: string;

  inputForm: FormGroup;

  data: any;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<InputDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public mdData: any) {
    this.data = this.mdData;
    this.createForm(mdData);
  }

  createForm(data: any) {
    this.inputForm = this.fb.group({
      time: [data.time, Validators.required],
      up: [data.up, Validators.required],
      low: [data.low, Validators.required],
    });
  }

  saveData() {
    let saveUp = String(this.inputForm.get('up').value);
    let saveLow = String(this.inputForm.get('low').value);

    if (saveUp.length < 3) {
      if (saveUp.length === 0) {
        saveUp = '000';
      }
      if (saveUp.length === 1) {
        saveUp = '00' + saveUp;
      }
      if (saveUp.length === 2) {
        saveUp = '0' + saveUp;
      }
    }

    if (saveLow.length < 2) {
      if (saveLow.length === 0) {
        saveLow = '00';
      }
      if (saveLow.length === 1) {
        saveLow = '0' + saveLow;
      }
    }

    this.dialogRef.close({
      time: String(this.inputForm.get('time').value),
      up: saveUp,
      low: saveLow
    });
  }

  disable() {
    this.dialogRef.close();
  }
}
