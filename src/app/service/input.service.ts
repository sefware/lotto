import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {InputModel} from '../model/input.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class InputService {

  private itemsCollection: AngularFirestoreCollection<InputModel>;
  lists: Observable<InputModel[]>;

  _path = 'user_input';

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<InputModel>(this._path)
      .doc('user_id')
      .collection('12345678', ref => ref.orderBy('time'));
    this.lists = this.itemsCollection.valueChanges();
  }

  loadData() {
    return this.lists;
  }

  addData(data: InputModel) {
    if (data.id) {
      return this.itemsCollection.doc(data.id).update(data);
    } else {
      data.id = this.afs.createId();
      return this.itemsCollection.doc(data.id).set(data);
    }
  }

  removeData(data: InputModel) {
    return this.itemsCollection.doc(data.id).delete();
  }

}
