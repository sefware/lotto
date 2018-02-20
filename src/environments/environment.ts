// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCzKUhjMgp6zu2c638uTEA54IsPz_QBWnY',
    authDomain: 'formularlotto.firebaseapp.com',
    databaseURL: 'https://formularlotto.firebaseio.com',
    projectId: 'formularlotto',
    storageBucket: 'formularlotto.appspot.com',
    messagingSenderId: '282416647025'
  }
};
