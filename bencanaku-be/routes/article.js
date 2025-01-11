const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

router.post('/create-article', articleController.createArticle);
router.get('/', articleController.getAllArticle);
router.get('/:id', articleController.getArticleById);
router.patch('/patch-article/:id', articleController.updateArticle);
router.delete('/delete/:id', articleController.deleteArticle);

module.exports = router;
