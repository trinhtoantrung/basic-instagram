angular.module('BasicInstagram').factory('Comment', function CommentFactory(User) {
  console.log("load CommentFactory");

  Comment = function (pComment) {
    if (pComment) {
      this.content = pComment.content;
      this.author = pComment.author;
      this.date = pComment.date;
    } else {
      this.content = "";
      this.author = "";
      this.date = "";
    }
  };

  return Comment;
});
