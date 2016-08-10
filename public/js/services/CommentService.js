(function(){
  angular.module('ngBlog')
          .factory('CommentService', CommentService);

      CommentService.$inject = ['$http'];

      function CommentService($http){
        var baseUrl = 'https://calm-atoll-49293.herokuapp.com/comments/';
        var service= {
          getComments: getComments,
          createComment: createComment,
          updateComment: updateComment,
          deleteComment: deleteComment
        };
        return service;

        function getComments(postId){
          var postUrl = baseUrl + postId;
          return $http.get(postUrl);
        }
        function createComment(commentObj){
          return $http.post(baseUrl, commentObj);
        }
        function updateComment(commentId, updateInfo){}
        function deleteComment(commentId){}
      }
})();
