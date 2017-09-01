import models from "../models";
const recipe = models.Recipes;


const recipeController = {
    create(req, res) {
        return recipe
            .create({
                name: req.body.name,
                description: req.body.description,
                ingredients: req.body.ingredients,
                directions: req.body.directions,
                userId:req.body.userId,
                thumbnail:"img/default.jpg"               
            })
            .then(result => res.status(201).send(result))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return recipe
            .findAll({
                attributes: ["name", "description", "ingredients", "directions"]
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error));
    },
    search(req, res) {
        return recipe
            .findOne({
                attributes: ["name", "description", "ingredients", "directions"],
                where: {name:req.params.name}
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return recipe
            .findOne({
                where: {
                    recipeId: req.params.recipeId,
                }
            })
            .then(recipe => {
                recipe.updateAttributes({
                    name: req.body.name,
                });
            }).status(200).send({message:"recipe has been updated"})
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return recipe
            .destroy({
                where: {
                    recipeId: req.params.recipeId,
                }
            })
            .then(res.status(200).send({message:"recipe is deleted"}))
            .catch(error => res.status(400).send(error));
    },
    
    
};

export default recipeController;


