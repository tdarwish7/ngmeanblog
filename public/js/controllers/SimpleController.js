
(function(){
  angular.module('ngBlog')
          .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService', 'PostService', 'CommentService'];

  function SimpleController($scope, UserService, PostService, CommentService){
    $scope.message = 'Hey! Angular Works!';
    var userId = '57a92af30bdf701100b451be';
    var updateInfo = {
      firstName: 'Tom',
      lastName: 'John',
      age: 45,
      email: 'sweg@me.com'
    };
    var postId = '57a3c62cdd2539ea73cfb546';


    UserService.getAllUsers()
                .then(function(response){
                  console.log("getAllUsers: ", response);
                });
    var userObj = {
      firstName: 'Lil',
      lastName: 'Jon',
      age: 41,
      email: 'jon@lil.com'
    };
    UserService.createUser(userObj)
                .then(function(response){
                  console.log("Create User: ", response);
                });
    UserService.getOneUser(userId)
                .then(function(response){
                  console.log("getOneUser: ", response);
                });

    UserService.updateUser(userId, updateInfo)
                .then(function(response){
                  console.log("updateUser: ", response);
                });
    UserService.deleteUser(userId)
                .then(function(response){
                  console.log("deleteUser: ", response);
                });


  PostService.getAllPosts()
              .then(function(response){
                console.log("getAllposts: ", response);
              });

  CommentService.getComments(postId)
                  .then(function(response){
                    console.log('Comments: ',response);
                  });
  }
})();
