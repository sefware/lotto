import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {AngularFirestore} from 'angularfire2/firestore';
import {User} from '../model/user.model';
import {StorageService} from "./storage.service";
import {Router} from "@angular/router";
import {Untils} from "../shared/untils";
import {DeviceDetectorService} from "ngx-device-detector";

@Injectable()
export class AuthService {

  public authentication: AngularFireAuth;
  public currentUser: User;

  constructor(private _storageService: StorageService,
              private _deviceService: DeviceDetectorService,
              private _router: Router,
              private _afa: AngularFireAuth,
              private _afs: AngularFirestore) {
    this.authentication = _afa;
  }

  verified(user: firebase.User): boolean {
    if (!!user) {
      this.updateUser(user);
    }
    return !!user;
  }

  updateUser(user: firebase.User) {
    this.currentUser = {
      uid: user.uid,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      providerId: user.providerId,
      disabled: false,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      lastLogin: this._storageService.getLastJedi(),
      deviceID: '',
      firstLoginTime: '',
    };
  }

  getDeviceID() {
    let result = this._deviceService.getDeviceInfo().userAgent;
    result = result.replace('/','');
    result = result.replace(';','');
    result = result.replace('(','');
    result = result.replace(')','');
    result = result.replace(' ','');
    return result.trim();
  }

  updateUserStatus() {
    if (!this.currentUser) {
      return;
    }

    this.currentUser.deviceID = this.getDeviceID();
    this.currentUser.lastLogin = new Date().getTime().toFixed(0);

    if (this.isNotDemo()) {
      this._storageService.saveLastJedi(this.currentUser.lastLogin);
      this._afs.collection('user').doc(this.currentUser.uid).set(this.currentUser);
      this._afs.collection('login').doc(this.currentUser.uid).set(this.currentUser)
    } else {
      this.currentUser.firstLoginTime = this.currentUser.lastLogin;
      this._afs.collection('demo').doc(this.currentUser.deviceID).update(this.currentUser);
    }
  }

  signIn(username: string, password: string): Promise<any> {
    this._afa.auth.languageCode = 'th';
    return this._afa.auth.signInWithEmailAndPassword(username + '@herolotto.com', password)
  }

  signOut(): void {
    if (this.isNotDemo()) {
      this._afs.collection('login').doc(this.currentUser.uid).delete().then(() => {
        this.authentication.auth.signOut().then(() => {
          this._router.navigateByUrl('/login').then(() => {
          });
        });
      })
    }
  }

  isNotDemo() {
    return this.currentUser.email != Untils.DEMO_EMAIL
  }
}
