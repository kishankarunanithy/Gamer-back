import multer from 'multer';

//* Configuration de multer pour l'upload des images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'public', 'uploads');

    cb(null, uploadDir);
  },

  filename: function (req, file, cb) {
    //* Générer un nom de fichier unique pour éviter les écrasements
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const extension = path.extname(file.originalname);
    cb(null, 'avatar-' + uniqueSuffix + extension);
  }
});

//* Filtre pour n'accepter que les images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Seules les images sont acceptées!'), false);
  }
};

//* limits de taille d'image à 5MB
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

//* Middleware pour traiter l'upload avant la validation
const handleFileUpload = (req, res, next) => {
  
  if (!req.file) {
    return next();
  }
  
  //* Construire l'URL relative du fichier et l'ajouter à req.body
  req.body.avatar_url = `/uploads/${req.file.filename}`;
  next();
};

module.exports = {
  upload,
  handleFileUpload
};

