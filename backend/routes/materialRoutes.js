const express = require('express');
const { uploadMaterial, getMaterials } = require('../controllers/materialController');
const { verifyToken } = require('../middleware/authMiddleware');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/', verifyToken, upload.single('file'), uploadMaterial);
router.get('/', verifyToken, getMaterials);

module.exports = router;

