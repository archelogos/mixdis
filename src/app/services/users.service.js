(function() {
  'use strict';

  angular
    .module('mixdis')
    .service('users', Users);

    /**
    * Database connection for Users
    * @TODO Need security Layer on top
    */

    /** @ngInject */
    function Users(firebaseRootRef, $firebaseObject, $firebaseArray){
        var usersRef = firebaseRootRef.child('users');

        /* CRUD */

        /**
        * @name add
        * @description add user
        * @param
        * @return
        */
        this.add = function (){

        };

        /**
        * @name get
        * @description get user
        * @param
        * @return
        */
        this.get = function (id){
            return $firebaseObject(usersRef.child(id));
        };

        /**
        * @name getAll
        * @description getAll user
        * @param
        * @return
        */
        this.getAll = function (){
            return $firebaseArray(usersRef);
        };

        /**
        * @name update
        * @description update user
        * @param
        * @return
        */
        this.update = function (){

        };

        /**
        * @name delete
        * @description delete user
        * @param
        * @return
        */
        this.delete = function (){

        };

    }

})();
