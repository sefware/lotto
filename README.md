[![CircleCI](https://circleci.com/gh/chaiwutmaneechot/profile.svg?style=svg)](https://circleci.com/gh/chaiwutmaneechot/profile)
[![codecov](https://codecov.io/gh/chaiwutmaneechot/profile/branch/master/graph/badge.svg)](https://codecov.io/gh/chaiwutmaneechot/profile)
[![Dependency Status](https://gemnasium.com/badges/github.com/chaiwutmaneechot/profile.svg)](https://gemnasium.com/github.com/chaiwutmaneechot/profile)

# Profile

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0-beta.1.

## Present
- Angular5
- Angular Material
- Responsive Web design
- Unit Test
- CI with Circle CI
- SSR with Firebase Cloud Functions
- PWA (Light House 100%) 

Create an account at https://firebase.google.com/

- `git clone https://github.com/codediodeio/angular-firestarter.git firestarter`
- `cd firestarter`
- `npm install`

Create the environment files below in `src/environments/`.

#### environment.ts
```typescript
export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'APIKEY',
        authDomain: 'DEV-APP.firebaseapp.com',
        databaseURL: 'https://DEV-APP.firebaseio.com',
        projectId: 'DEV-APP',
        storageBucket: 'DEV-APP.appspot.com',
        messagingSenderId: '123456789'
    }
};
```
#### environment.prod.ts
```typescript
export const environment = {
    production: true,
    firebaseConfig: {
        // same as above, or use a different firebase project to isolate environments
    }
};
```
And finally `ng serve`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
