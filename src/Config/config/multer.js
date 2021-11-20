import fs from 'fs';
import Multer from 'multer';
import path from 'path';
 //name of the input type (avatar in our case).
const FILENAME = 'img';

const uploadDir = path.join(__static , '/uploads/');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

/**
*	multer setting for photo upload storage and imagename setting, also
*	set the file details in request object
*/
let photoStorage = Multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        cb(null, "Photo" + '_' + Date.now() + path.extname(file.originalname));
    }
})

/**
*	Function to set storage for single upload, named as FILENAME
*/
let singleFileUpload = () => {
    return Multer({
        storage: photoStorage
    }).single(FILENAME);
}

module.exports.photoUpload = singleFileUpload;