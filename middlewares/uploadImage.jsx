const multer = require('multer');

module.exports = (multer ({
    storage: multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, '../public/upload/users')
        },
        filename: (req, file, cb ) => {
            cb(null, Date.now().toString() + "_" + file.originalname)
        }
    }),

    fileFilter: (res, file, cb) => {
        const extensaoImg = ['image/png', 'image/jdg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype)
        if(extensaoImg){
            return cb(null,true);
        }

        return cb(null,false);
    }
}))