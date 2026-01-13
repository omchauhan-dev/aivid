const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.post('/generate-hook', aiController.generateHook);
router.post('/generate-script', aiController.generateScript);
router.post('/generate-caption', aiController.generateCaption);
router.post('/generate-cta', aiController.generateCta);

module.exports = router;
