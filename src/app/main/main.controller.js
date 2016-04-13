(function() {
  'use strict';

  angular
    .module('mixdis')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(users) {
    var vm = this;
    vm.sergio = users.get('sergio');
    vm.users = users.getAll();
  }
})();
