// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

   firebaseConfig: {
    apiKey: "AIzaSyC6xV-O6ecZvL4IBbtE6TxmgWuGyiZgrSg",
    authDomain: "apollo-test-b9409.firebaseapp.com",
    databaseURL: "https://apollo-test-b9409.firebaseio.com",
    projectId: "apollo-test-b9409",
    storageBucket: "apollo-test-b9409.appspot.com",
    messagingSenderId: "286672928166",
    appId: "1:286672928166:web:286dd7d2793bab8b"
  }
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
