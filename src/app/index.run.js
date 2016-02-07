(function() {
  'use strict';

  angular
    .module('mixdis')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
