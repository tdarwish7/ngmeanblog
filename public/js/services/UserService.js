(function() {
  angular.module('ngBlog')
          .factory('UserService', UserService);

    UserService.$inject = ['$http'];

    function UserService($http){
      var baseUrl = 'https://calm-atoll-49293.herokuapp.com/users/';
      var service = {
        getAllUsers: getAllUsers,
        createUser: createUser,
        getOneUser: getOneUser,
        updateUser: updateUser,
        deleteUser: deleteUser
      };
      return service;

      function getAllUsers(){
        return $http.get(baseUrl);
      }
      function createUser(userObj){
        return $http.post(baseUrl, userObj);
      }
      function getOneUser(userId){}
      function updateUser(userId, updateInfo){}
      function deleteUser(userId){}
    }
})();
