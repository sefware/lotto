import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TdLoadingService, TdMediaService} from '@covalent/core';
import * as firebase from 'firebase';
import {MAT_LABEL_GLOBAL_OPTIONS, MatDialog} from '@angular/material';
import {AuthService} from '../../service/auth.service';
import {ConfirmComponent, DialogModel} from '../../dialog/confirm/confirm.component';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'never'}}
  ]
})

export class LoginComponent implements OnInit, AfterViewInit {

  username = '';
  password = '';

  constructor(private _authService: AuthService,
              private _angularFireAuth: AngularFireAuth,
              private _dialog: MatDialog,
              private _media: TdMediaService,
              private _changeDetectorRef: ChangeDetectorRef,
              private _loadingService: TdLoadingService,
              private _router: Router) {

  }

  ngOnInit() {
    this._authService.authentication.authState.subscribe((user) => {
      if (this._authService.verified(user)) {
        this._authService.updateUserStatus();
        this._router.navigateByUrl('');
      }
    });
  }

  ngAfterViewInit(): void {
    this._media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

  login() {
    // this.error = false;
    this._loadingService.register();
    this._angularFireAuth.auth.languageCode = 'th';
    this._authService.signIn(this.username, this.password)
      .then((user: firebase.User) => {
        this._loadingService.resolve();
      }).catch((err: any) => {
      this.showDialog(err);
      this._loadingService.resolve();
    });
  }

  showDialog(massage: string) {
    this._dialog.open(ConfirmComponent, {
        data: new DialogModel({
          type: 'fail',
          title: 'เข้าสู่ระบบไม่สำเร็จ',
          content: massage,
          btn_cancel_text: 'ปิด'
        })
      }
    ).afterClosed().subscribe(() => {

      }
    );
  }

  setUsername(_userName: string) {
    this.username = _userName;
  }

  setPassword(_password: string) {
    this.password = _password;
  }
}
