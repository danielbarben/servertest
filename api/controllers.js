const db = require('../db/index.js');

const homeRoute = (req, res) => {
    res.send("my project")
}

const findAllProjects = (req, res) => {
    db.models.Projects
        .findAll({where: {id: '1'},   include: [
            {model: db.models.Questions, include: [db.models.Answers] }
        ]})
        .then(projects => {
            const tmp = projects;
            res.status(200).send(tmp);
            

        })
    }

/*
include: [{
                model: family, include: [person]
            }]
            */



/* 
const findNotebookById = (req, res) => {
    const notebookId = req.params.notebookId;
    db.models.Notebook
        .findById(notebookId, { include: [db.models.Recipe] })
        .then(notebook => {
            notebook === null ? res.status(404).send([]) : res.send(notebook)

        })
}

const findAllRecipe = (req, res) => {
    db.models.Recipe
        .findAll().then(recipes => res.status(200).send(recipes))
}

const findRecipeById = (req, res) => {
    const recipeId = req.params.recipeId
    db.models.Recipe
        .findById(recipeId)
        .then(recipe => {
            recipe === null ? res.status(404).send([]) : res.send(recipe)
        })
}

const addNewRecipe = (req, res) => {
    const { title, description, image, ingredients } = req.body;
    if (title && description && ingredients) {
        db.models.Recipe.create({
            title,
            description,
            image,
            ingredients,
            favorite: false
        }).then(recipe => res.send(recipe))
    }
    else {
        res.send({ RequiredData: ["title", "description", "ingredients"] })
    }
}

const updateRecipe = (req, res) => {
    const recipeId = req.params.recipeId;
    db.models.Recipe
        .update(req.body, { where: { id: recipeId }, returning: true, })
        .then(recipe => {
            res.status(404).send(recipe[1])
        })
}

const recipesFavorites = (req, res) => {
    db.models.Recipe
        .findAll({ where: { favorite: true } })
        .then(recipes => {
            res.send(recipes)
        })
}

const toggleFavorites = (req, res) => {
    const recipeId = req.params.recipeId;
    db.models.Recipe
        .findById(recipeId)
        .then(recipe => {
            recipe.updateAttributes({ favorite: !recipe.favorite })
            res.send('Favourites list updated')
        })
}

const updateNotebookWithNewRecipe = (req, res) => {
    const recipeId = req.params.recipeId
    const notebookId = req.params.notebookId;
    db.models.Recipe
        .findById(recipeId)
        .then(recipe => {
            recipe.updateAttributes({ notebookId: notebookId })
            res.send('Recipe added to the notebook')
        })
}
*/
module.exports = {
    homeRoute,
    findAllProjects,
}