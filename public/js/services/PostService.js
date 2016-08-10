(function(){
  angular.module('ngBlog')
          .factory('PostService', PostService);

    PostService.$inject = ['$http'];

    function PostService($http){
      var baseUrl = 'https://calm-atoll-49293.herokuapp.com/posts/'
      var service = {
        getAllPosts: getAllPosts,
        createPost: createPost,
        getOnePost: getOnePost,
        updatePost: updatePost,
        deletePost: deletePost
      };
      return service;

      function getAllPosts(){
        return $http.get(baseUrl);
      }
      function createPost(postObj){
        return $http.post(baseUrl, postObj);
      }
      function getOnePost(postId){}
      function updatePost(postId, updateInfo){}
      function deletePost(postId){}

    }
})();
