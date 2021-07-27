const multer = require("multer");
const path = require("path");

//  image will be stored on runtime memory instead of actual location on server
let storage = multer.memoryStorage();

module.exports = multer({
    storage,
    limits: {fileSize: 2500000},
    fileFilter: function(req, file, callback) {
        checkFileType(file, callback);
    }
});

function checkFileType(file, callback) {
    const ext = /jpeg|gif|png|jpg/;
    const isCorrectMimetype = ext.test(file.mimetype);
    const isCorrectExt = ext.test(path.extname(file.originalname).toLowerCase());
    if(isCorrectExt && isCorrectMimetype)
        callback(null, true);
    else
        callback("Error: only images");
}