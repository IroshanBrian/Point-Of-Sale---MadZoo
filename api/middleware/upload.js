const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null, 'assets/products'); // Save file to assets/products directory
     },
     filename: (req, file, cb) => {
          const ext = path.extname(file.originalname);
          cb(null, Date.now() + ext); // Rename file with timestamp
     }
});

const upload = multer({ storage });

module.exports = upload;
