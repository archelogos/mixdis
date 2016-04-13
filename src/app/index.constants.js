(function() {
  'use strict';

  angular
    .module('mixdis')
    .constant('APP_CONFIG',{
        'APP_NAME' : 'mixdis',
        'APP_VERSION' : '0.0.0',
        'APP_VERSION_NAME' : 'just-talking',
        'LANGUAGES' : {
            'es-ES' : true,
            'en-EN' : true
        },
        'DEBUG_MODE' : true,
        'ERROR_REPORT' : false,
        'FIREBASE_URL': 'https://mixdis.firebaseio.com'
    })

})();
