module.exports = function(app){
  app.post('/file_upload', function(req, res) {
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);

    var file = "./server/assets/avatar" + req.files.file.name;
   
     fs.readFile( req.files.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
           if( err ){
              console.log( err );
              }else{
                 response = {
                    message:'File uploaded successfully',
                    filename:req.files.file.name
                 };
              }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
     });
  })
};