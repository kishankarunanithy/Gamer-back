import multer from 'multer';
import path from "path";
import { fileURLToPath } from 'url';

//* Obtient le chemin du répertoire courant, compatible ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//* Configuration de multer pour l'upload des images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, '..', '..', 'public', 'uploads');
    cb(null, uploadDir);
  },

  filename: function (req, file, cb) {
    // * Générer un nom de fichier unique pour éviter les écrasements
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
export const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

//* Middleware pour gérer les erreurs de multer
export const handleMulterErrors = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return next(uploadFailed('Le fichier est trop volumineux. Taille maximale : 5MB'));
    }
    return next(uploadFailed(`Erreur lors de l'upload: ${err.message}`));
  }
  next(err);
};

//* Middleware pour traiter l'upload avant la validation
export const handleFileUpload = (req, res, next) => {

  if (!req.file) {
    return next();
  }
  
  //* Construire l'URL relative du fichier et l'ajouter à req.body
  req.body.avatar_url = `${req.file.filename}`;

  next();
};


