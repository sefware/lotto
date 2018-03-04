import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {AngularFirestore} from 'angularfire2/firestore';
import {User} from '../model/user.model';

@Injectable()
export class AuthService {

  public authentication: AngularFireAuth;
  public currentUser: User;

  constructor(private _afa: AngularFireAuth,
              private _afs: AngularFirestore) {
    this.authentication = _afa;
  }

  // importJson(): void {
  //   const content = require('../../assets/jdr-tour-export.json');
  //
  //   if (content) {
  //     Object.keys(content).forEach((contentKey) => {
  //       const nestedContent = content[contentKey];
  //       if (typeof nestedContent === 'object') {
  //         Object.keys(nestedContent).forEach((docTitle) => {
  //           console.log(nestedContent[docTitle]);
  //           this._fbFireStore
  //             .collection(contentKey)
  //             .doc(docTitle)
  //             .set(nestedContent[docTitle]);
  //         });
  //       }
  //     });
  //   }
  // }

  verified(user: firebase.User): boolean {
    return (user && user.emailVerified);
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
      emailVerified: user.emailVerified
    };
  }

  updateUserStatus() {
    if (!this.currentUser) {
      return;
    }
    // const user_id = this.currentUser.uid;
    // const ref = firebase.database().ref('.info/connected');
    // ref.on('value', (snap) => {
    //   if (snap.val() === true) {
    //     console.log(user_id + ' online');
    //     this._afs.collection('user_online').doc('all').collection(user_id).doc('').set(
    //       {
    //         uid: this.currentUser.uid,
    //         last_changed: firebase.database.ServerValue.TIMESTAMP
    //       });
    //     // if (this.currentProperty) {
    //     //   this._afs.collection('user_online').doc('property').collection(this.currentProperty).add(
    //     //     {
    //     //       uid: this.currentUser.uid,
    //     //       last_changed: firebase.database.ServerValue.TIMESTAMP,
    //     //     }
    //     //   );
    //     // }
    //   } else {
    //     console.log(user_id + ' offline');
    //     this._afs.collection('user_online').doc('all').collection(user_id).add({});
    //     if (this.currentProperty) {
    //       this._afs.collection('user_online').doc('property').collection(this.currentProperty).doc(user_id).delete();
    //     }
    //   }
    // });
  }

  // signIn(): void {
  //   if (!this.currentUser) {
  //     return;
  //   }
  //   this.currentProperty = null;
  //   this._router.navigateByUrl('/chooseproperty');
  // }

  // signOut(): void {
  //   if (this.currentUser) {
  //     firebase.database().ref('status/' + this.currentUser.uid).set(
  //       new UserStatus({
  //         uid: this.currentUser.uid,
  //         state: 'offline',
  //         last_changed: firebase.database.ServerValue.TIMESTAMP
  //       })
  //     );
  //   }
  //   this.currentProperty = null;
  //   this.authentication.auth.signOut();
  //   this._router.navigateByUrl('/login');
  // }

}
