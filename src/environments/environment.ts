// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDvnIuaUmrt9_1oMRtm2XBCQ_gbEWd1e8U',
    authDomain: 'bear-in-kitchen.firebaseapp.com',
    databaseURL: 'https://bear-in-kitchen.firebaseio.com',
    projectId: 'bear-in-kitchen',
    storageBucket: 'bear-in-kitchen.appspot.com',
    messagingSenderId: '617128966594'
  }
};
