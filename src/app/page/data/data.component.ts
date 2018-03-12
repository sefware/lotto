import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {StorageService} from '../../service/storage.service';
import {InputModel} from '../../model/input.model';
import {Router} from '@angular/router';
import {TdLoadingService} from '@covalent/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  @ViewChild('input') input;

  loading = false;
  data: InputModel[];
  public mask = [/\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/];
  lists: InputModel[] = [];
  pasteValet: string;

  async delay(milliseconds: number) {
    return new Promise<void>(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  constructor(public _storageService: StorageService,
              private _loadingService: TdLoadingService,
              private _router: Router) {
  }

  ngOnInit() {
    this.displayData();
  }

  displayData() {
    this.data = this._storageService.getListData();

    let lastIndex = 0;
    if (this.data.length > 1) {
      lastIndex = Number(this.data[this.data.length - 1].time);
    }

    this.init().then(() => {
      this.loading = false;

      this.addEmptyList(lastIndex);

      this.data.forEach((s) => {
        this.lists[Number(s.time) - 1] = new InputModel({
          time: s.time,
          up: s.up + ' - ' + s.low,
          low: '',
        });
      });
    });
  }

  @HostListener('paste', ['$event']) blockPaste(e: any) {
    // e.preventDefault();
    // console.log('pasteValet : ' + this.pasteValet);

  }

  onPaste(component: HTMLElement) {

    if (this.input.nativeElement.value === '') {
      return;
    }

    this.lists.forEach((data: InputModel) => {
      this._storageService.removeData(data.time);
    });
    this.lists = [];
    this.data = [];

    const x = this.input.nativeElement.value.split(' ');
    for (let i = 0; i < x.length; i++) {
      const y = x[i].replace(' ', '');

      let index = '0';
      let up = '0';
      let low = '0';

      if ((i + 1) % 3 === 0) {
        console.log(i + ' : ' + y.trim() + ' = ' + Number(y.trim()) + ' == ' + y.length);

        if (y.length === 9) {
          console.log(Number(y.substring(0, 2)));
          console.log(Number(y.substring(2, 6)));
          console.log(Number(y.substring(6, 9)));

          index = y.substring(0, 2);
          up = y.substring(2, 6);
          low = y.substring(6, 9);
        }

        if (y.length === 8) {
          console.log(Number(y.substring(0, 1)));
          console.log(Number(y.substring(1, 5)));
          console.log(Number(y.substring(5, 8)));

          index = y.substring(0, 1);
          up = y.substring(1, 5);
          low = y.substring(5, 8);
        }

        this.addList(index,
          {
            time: index,
            up: up + ' - ' + low,
            low: ''
          });
      }
    }

    this.input.nativeElement.value = '';

    this.saveData(false);
    this.displayData();
  }

  async init() {
    await this.delay(100);
  }

  addEmptyList(lastIndex: number) {
    if (lastIndex < 10) {
      lastIndex = 10;
    } else {
      lastIndex = lastIndex + 5;
    }
    for (let i = 0; i < lastIndex; i++) {
      this.addList(String(i + 1), null);
    }
  }

  addEmptyListMore() {
    const start = this.lists.length;
    const stop = this.lists.length + 10;
    for (let i = start; i < stop; i++) {
      if (i < 100) {
        this.addList(String(i + 1), null);
      }
    }
  }

  setValue(index: number, type: string, value: string) {
    this.lists[index].up = value;

    console.log('save : ' + value);
  }

  clearList() {
    this.lists.forEach((data: InputModel) => {
      this._storageService.removeData(data.time);
    });
    this.lists = [];
    this.data = [];
    this.addEmptyList(0);
  }

  addList(time: string, input: InputModel) {

    if (time === '0') {
      return;
    }

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

    const check = this.lists.find(x => x.time == _time);
    if (!check) {
      this.lists.push({
        time: _time,
        up: _up,
        low: _low
      });
    }
  }

  saveData(_disable: boolean) {

    this.lists.forEach(s => {

      console.log('sss = ' + s.up);

      const sp = s.up.split('-');

      let saveUp = String(Number(sp[0]));
      let saveLow = String(Number(sp[1]));
      console.log('sss1 = ' + saveUp);
      console.log('sss2 = ' + saveLow);


      saveUp.replace('_', '');
      saveLow.replace('_', '');

      // console.log('saveUp ' + saveUp);
      // console.log('saveLow ' + saveLow);

      if (saveUp !== '' && saveLow !== '' && saveUp !== 'NaN' && saveLow !== 'NaN') {

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

        if (s.time.length === 1) {
          s.time = '0' + s.time;
        }

        this._storageService.saveData({
          time: s.time,
          up: saveUp,
          low: saveLow
        });
      }
    });

    if (_disable) {
      this.disable();
    }
  }

  disable() {
    this._router.navigateByUrl('/');
  }

}
