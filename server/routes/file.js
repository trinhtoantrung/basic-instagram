var fs = require("fs");
var multer  = require('multer');
var upload = multer({dest: 'uploads/avatars'});
var type = upload.single('file');

module.exports = function(app){
  app.post('/fileupload', type, function(req, res) {
    var fileName = req.body.fileName;
    var type = req.body.type; 
    var file = "";

    if (type === "avatar") {
      file = "./uploads/avatars/"  + fileName;
    } else if (type === "image") {
      file = "./uploads/images/"  + fileName;
    }

    fs.readFile(req.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if(err){
            console.log(err);
            } else {
               response = {
                  message:'File uploaded successfully',
                  filename:fileName
               };
            }
         console.log(response);
         res.end(JSON.stringify(response));
      });
    });
  })
};
