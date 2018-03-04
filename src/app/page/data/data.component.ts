import {Component} from '@angular/core';
import {StorageService} from '../../service/storage.service';
import {InputModel} from '../../model/input.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {

  data: InputModel[];
  _mask = [/\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/];
  lists: InputModel[] = [];

  constructor(public _storageService: StorageService,
              private _router: Router) {

    this.data = this._storageService.getListData();

    this.addEmptyList();

    this.data.forEach(s => {
      const _s = new InputModel({
        time: s.time,
        up: s.up + ' - ' + s.low,
        low: '',
      });
      this.lists[Number(s.time) - 1] = _s;
    });
  }

  addEmptyList() {
    for (let i = 0; i < 99; i++) {
      this.addList(String(i + 1), null);
    }
  }

  setValue(index: number, type: string, value: string) {
    switch (type) {
      case 'time': {
        this.lists[index].time = String(value);
        break;
      }
      case 'up': {
        this.lists[index].up = value;
        break;
      }
    }
  }

  clearList() {
    this.lists.forEach((data: InputModel) => {
      this._storageService.removeData(data.time);
    });
    this.lists = [];
    this.addEmptyList();
  }

  addList(time: string, input: InputModel) {

    let _up = '';
    let _low = '';
    let _time = String(time);

    if (String(time).length === 1) {
      _time = '0' + _time;
    }

    // _time = 'รอบที่ ' + _time;

    if (input) {
      _up = input.up;
      _low = input.low;
      _time = input.time;
    }

    this.lists.push({
      time: _time,
      up: _up,
      low: _low
    });
  }

  saveData() {

    this.lists.forEach(s => {

      let saveUp = s.up.substring(0, 3);
      let saveLow = s.up.substring(6, 8);

      saveUp.replace('_', '');
      saveLow.replace('_', '');

      // console.log('saveUp ' + saveUp);
      // console.log('saveLow ' + saveLow);

      if (saveUp !== '' && saveLow !== '') {

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

        this._storageService.saveData({
          time: s.time,
          up: saveUp,
          low: saveLow
        });
      }
    });

    this.disable();
  }

  disable() {
    this._router.navigateByUrl('/');
  }

}
