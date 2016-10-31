var fs = require("fs");
var multer  = require('multer');
var upload = multer({dest: 'uploads/'});
var type = upload.single('file');

module.exports = function(app){
  app.post('/fileupload', type, function(req, res) {
    console.log(req.file)
    console.log(req.body.userName);
    console.log(req.body.timestamp);

    var fileName = req.body.userName + "_" + req.body.timestamp;

    var file = "./uploads/"  + fileName + ".jpg";
    fs.readFile(req.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
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
