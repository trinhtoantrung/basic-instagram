angular.module('BasicInstagram').service('FileUpload', function FileUploadService($http) {
  var uploadUrl = "http://localhost:8383/fileupload";

   this.uploadFileToUrl = function(file, userName, timestamp){
      var fd = new FormData();
      fd.append('file', file);
      fd.append('userName', userName);
      fd.append('timestamp', timestamp);

      $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
           headers: {'Content-Type': undefined}
      })

      .success(function(){
      })

      .error(function(){
      });
   }
});
