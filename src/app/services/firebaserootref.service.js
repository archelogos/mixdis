(function() {
  'use strict';

  angular
    .module('mixdis')
    .factory('firebaseRootRef', FirebaseRootRef);

    /** @ngInject */
    function FirebaseRootRef(APP_CONFIG){
        return new Firebase(APP_CONFIG.FIREBASE_URL);
    }

})();
