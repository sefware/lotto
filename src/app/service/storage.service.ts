import {Injectable} from '@angular/core';
import {InputModel} from '../model/input.model';
import {LocalStorageService} from 'ngx-store';

@Injectable()
export class StorageService {

  constructor(public localStorageService: LocalStorageService) {
  }

  public saveData(object: InputModel) {
    this.localStorageService.set(object.time, object);
  }

  public saveCalType(calType: string) {
    this.localStorageService.set('calType', calType);
  }

  public getCalType(): string {
    return this.localStorageService.utility.get('calType');
  }

  public removeData(key: string): void {
    this.localStorageService.set(key, null);
  }

  public getListData(): InputModel[] {
    const dataList = [];
    this.localStorageService.utility.forEach((value) => {
      if (value.time) {
        dataList.push(value);
      }
    });
    return dataList;
  }

  public saveLastJedi(data: string) {
    this.localStorageService.set('lastJedi', data);
  }

  public getLastJedi(): string {
    return this.localStorageService.utility.get('lastJedi');
  }

  public saveNewHope(data: string) {
    this.localStorageService.set('newHope', data);
  }

  public getNewHope(): string {
    return this.localStorageService.utility.get('newHope');
  }
}
