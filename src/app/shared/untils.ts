import {LanguageModel} from '../models/language';

export class Untils {

  public static LANGUAGES: LanguageModel[] = [
    {code: 'en', name: 'English', icon: 'flag-icon flag-icon-gb'},
    {code: 'th', name: 'ภาษาไทย', icon: 'flag-icon flag-icon-th'},
    {code: 'ko', name: '한국어', icon: 'flag-icon flag-icon-kr'}
  ];
  public static DEFAULT_LANGUAGE = new LanguageModel({code: 'en', name: 'English', icon: 'flag-icon flag-icon-gb'});

  public static FIREBASE_CLOUD_FUNCTIONS = 'https://us-central1-sefware-tour.cloudfunctions.net';

  public static languages = ['en', 'th', 'ko'];
  public static defaultLanguages = 'en';
}
