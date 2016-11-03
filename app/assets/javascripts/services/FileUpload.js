angular.module('BasicInstagram').service('FileUpload', function FileUploadService($http) {
  var uploadUrl = "http://localhost:8383/fileupload";

   this.uploadFileToUrl = function(file, fileName, type){
      var fd = new FormData();
      fd.append('file', file);
      fd.append('fileName', fileName);
      fd.append('type', type);

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
