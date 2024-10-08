const express = require('express');
const { getMaterials, uploadMaterial } = require('../controllers/materialController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getMaterials);
router.post('/', authMiddleware, uploadMaterial);

module.exports = router;
