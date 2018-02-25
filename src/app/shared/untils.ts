import {StorageStrategy} from 'angular-l10n';

export class Untils {
  public static FIREBASE_CLOUD_FUNCTIONS = 'https://us-central1-chaiwut-profile.cloudfunctions.net';
  public static locale = {
    languages: [
      { code: 'en', dir: 'ltr' },
      { code: 'th', dir: 'ltr' }
      ],
    defaultLocale: { languageCode: 'th', countryCode: 'TH' },
    currency: 'THB',
    storage: StorageStrategy.Cookie,
    cookieExpiration: 30
  };

  public static types = [
    {value: '1', viewValue: 'แบบกรอกผล', enable: true},
    {value: '2', viewValue: 'ผลหอย', enable: false},
    {value: '3', viewValue: 'ผลหมู', enable: false},
    {value: '4', viewValue: 'ผลหมี', enable: false},
    {value: '5', viewValue: 'ผลโชค', enable: false},
    {value: '6', viewValue: 'ผลเจต', enable: false},
    {value: '7', viewValue: 'ผลแพ', enable: false},
    {value: '8', viewValue: 'ผลแมน', enable: false}
  ];

  public static calulate = [
    {value: '1', viewValue: 'เสียวตัวเดียว', enable: true},
    {value: '2', viewValue: 'ปักสิบบน', enable: false},
    {value: '3', viewValue: 'ปักหน่วยบน', enable: false},
    {value: '4', viewValue: 'ปักสิบล่าง', enable: false},
    {value: '5', viewValue: 'ปักหน่วยล่าง', enable: false},
    {value: '6', viewValue: 'รูดบน', enable: false},
    {value: '7', viewValue: 'รูดล่าง', enable: false},
    {value: '8', viewValue: 'เลขวินบน เรียงเลข', enable: false}
  ];

}
