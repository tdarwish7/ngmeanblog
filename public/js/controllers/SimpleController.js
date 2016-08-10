
(function(){
  angular.module('ngBlog')
          .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService', 'PostService', 'CommentService'];

  function SimpleController($scope, UserService, PostService, CommentService){
    $scope.message = 'Hey! Angular Works!';
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
