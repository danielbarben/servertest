const express = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router.get('/', controllers.homeRoute);
router.get('/projects', controllers.findAllProjects);
//router.get('/notebooks/:notebookId', controllers.findNotebookById);
//router.get('/recipes', controllers.findAllRecipe);

module.exports = router;
