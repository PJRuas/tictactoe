// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false
};

const firebaseConfig = {
  apiKey: "AIzaSyCxU0IXe3EW9CHzSFAx-ex2oiNGGI2OIR0",
  authDomain: "tictactoe-7344d.firebaseapp.com",
  projectId: "tictactoe-7344d",
  storageBucket: "tictactoe-7344d.appspot.com",
  messagingSenderId: "171173738794",
  appId: "1:171173738794:web:d7512fb5aaff9b30050653",
  measurementId: "G-KVKYWN8WYY"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
