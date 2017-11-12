import {StorageStrategy} from 'angular-l10n';

export class Untils {
  public static FIREBASE_CLOUD_FUNCTIONS = 'https://us-central1-chaiwut-profile.cloudfunctions.net';
  public static locale = {
    languages: [
      { code: 'en', dir: 'ltr' },
      { code: 'th', dir: 'ltr' }
      ],
    defaultLocale: { languageCode: 'en', countryCode: 'US' },
    currency: 'USD',
    storage: StorageStrategy.Cookie,
    cookieExpiration: 30
  };
}
