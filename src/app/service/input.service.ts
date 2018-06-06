import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {InputModel} from '../model/input.model';

@Injectable()
export class InputService {

  // private itemsCollection: AngularFirestoreCollection<InputModel>;
  lists: InputModel[] = [];


  // _path = 'user_input';

  constructor(private afs: AngularFirestore) {
    // this.itemsCollection = afs.collection<InputModel>(this._path)
    //   .doc('user_id')
    //   .collection('12345678', ref => ref.orderBy('time'));
    // this.lists = this.itemsCollection.valueChanges();

    // this.localStorage.setItem('color', 'red').subscribe(() => {
    //   // Done
    // }, () => {
    //   // Error
    // });

  }

  loadData() {
    // return this.lists;
    for (let i = 1; i < 100; i++) {
      // this.localStorage.getItem<InputModel[]>(String(i)).subscribe((input) => {
      //   if (input) {
      //     this.lists = input;
      //   }
      // });
    }
    return this.lists;
  }

  addData(data: InputModel) {
    // if (data.id) {
    //   return this.itemsCollection.doc(data.id).update(data);
    // } else {
    //   data.id = this.afs.createId();
    //   return this.itemsCollection.doc(data.id).set(data);
    // }

    // return this.localStorage.setItem(data.time, data);
  }

  removeData(data: InputModel) {
    // this.localStorage.removeItem(data.time).subscribe(() => {
    // });
    // return this.itemsCollection.doc(data.id).delete();
  }
}
