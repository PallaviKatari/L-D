// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //cgApiUrl: 'http://localhost:50088/api/',
  //g2ApiUrl:'http://localhost:50088/api/'
  // cgApiUrl: 'http://172.16.0.159/SMSWebAPI/api',
  // g2ApiUrl:'http://172.16.0.159/SMSWebAPI/api',
  apiUrl: 'http://cgvakstage.com:8079/api/v1/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
