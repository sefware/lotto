// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBkOw5kPTVfQy48GT1JdJUNCjjXnvaxM8M',
    authDomain: 'hero-lotto.firebaseapp.com',
    databaseURL: 'https://hero-lotto.firebaseio.com',
    projectId: 'hero-lotto',
    storageBucket: 'hero-lotto.appspot.com',
    messagingSenderId: '178762889465'
  }
};
