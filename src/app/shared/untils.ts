import {StorageStrategy} from 'angular-l10n';

export class Untils {
  public static FIREBASE_CLOUD_FUNCTIONS = 'https://us-central1-chaiwut-profile.cloudfunctions.net';
  public static locale = {
    languages: [
      {code: 'en', dir: 'ltr'},
      {code: 'th', dir: 'ltr'}
    ],
    defaultLocale: {languageCode: 'th', countryCode: 'TH'},
    currency: 'THB',
    storage: StorageStrategy.Cookie,
    cookieExpiration: 30
  };

  public static types = [
    {value: '1', viewValue: 'แบบกรอกผล', enable: true},
    // {value: '2', viewValue: 'ผลหอย', enable: false},
    // {value: '3', viewValue: 'ผลหมู', enable: false},
    // {value: '4', viewValue: 'ผลหมี', enable: false},
    // {value: '5', viewValue: 'ผลโชค', enable: false},
    // {value: '6', viewValue: 'ผลเจต (เร็วๆนี้)', enable: false},
    // {value: '7', viewValue: 'ผลแพ', enable: false},
    // {value: '8', viewValue: 'ผลแมน', enable: false}
  ];

  public static calulate = [
    {value: '1', viewValue: 'รูดตัวเดียว', enable: true},
    {value: '6', viewValue: 'รูดบน', enable: true},
    {value: '7', viewValue: 'รูดล่าง', enable: true},

    {value: '8', viewValue: 'วินบน 6 ตัว', enable: true},
    {value: '9', viewValue: 'วินบน 7 ตัว', enable: true},
    {value: '10', viewValue: 'วินบน 8 ตัว', enable: true},

    {value: '11', viewValue: 'วินล่าง 6 ตัว', enable: true},
    {value: '12', viewValue: 'วินล่าง 7 ตัว', enable: true},
    {value: '13', viewValue: 'วินล่าง 8 ตัว', enable: true},

    {value: '2', viewValue: 'ปักสิบบน', enable: true},
    {value: '3', viewValue: 'ปักหน่วยบน', enable: true},
    {value: '4', viewValue: 'ปักสิบล่าง', enable: true},
    {value: '5', viewValue: 'ปักหน่วยล่าง', enable: true},

    {value: '14', viewValue: '3ตัวบน 5 ตัว', enable: true},
    {value: '15', viewValue: '3ตัวบน 6 ตัว', enable: true},
    {value: '16', viewValue: '3ตัวบน 7 ตัว', enable: true},

    {value: '17', viewValue: 'หัวท้าย 6 ตัว', enable: true},
    {value: '18', viewValue: 'หัวท้าย 4 ตัว', enable: true},
    {value: '19', viewValue: 'เทียบสูตร', enable: true},
  ];

  public static getCalculateTitle(value: string) {
    return Untils.calulate.filter(s => s.value === value)[0].viewValue;
  }
}
