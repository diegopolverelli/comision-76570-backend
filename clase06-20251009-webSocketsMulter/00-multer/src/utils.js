const multer = require("multer")

function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:
    // cb(null, false)
    if(file.mimetype.split("/")[0]!="image"){
        cb(new Error('Solo se admiten imagenes'))
    }else{
        cb(null, true)
    }
    
    // To accept the file pass `true`, like so:
  
    // You can always pass an error if something goes wrong:
    // cb(new Error('I don\'t have a clue!'))
  
  }


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads')
    },
    filename: function (req, file, cb) {
        
        cb(null, Date.now() + '-' + file.originalname)
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const uploader = multer({ storage: storage, fileFilter })

module.exports={uploader}