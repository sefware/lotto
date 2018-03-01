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
    this.dialogRef.close({
      time: this.inputForm.get('time').value,
      up: this.inputForm.get('up').value,
      low: this.inputForm.get('low').value
    });
  }
}
