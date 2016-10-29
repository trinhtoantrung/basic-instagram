var fs = require("fs");
var multer  = require('multer');
var upload = multer({dest: 'uploads/'});
var type = upload.single('file');

module.exports = function(app){
  app.post('/fileupload', type, function(req, res) {
    console.log(req.file);
    console.log(req.file.filename);
    console.log(req.file.path);
    var file = __dirname + "/" + req.file.name;
    fs.readFile( req.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            } else {
               response = {
                  message:'File uploaded successfully',
                  filename:req.file.filename
               };
            }
         console.log(response);
         res.end( JSON.stringify(response));
      });
    });
  })
};
