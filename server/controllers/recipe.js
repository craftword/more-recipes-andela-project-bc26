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
                userId:req.body.userId               
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
    update(req, res) {
        return recipe
            .findAll({
                where: {
                    groupId: req.params.groupId,
                }
            })
            .then(getPostMessage => res.status(200).send(getPostMessage))
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return recipe
            .findAll({
                where: {
                    groupId: req.params.groupId,
                }
            })
            .then(getPostMessage => res.status(200).send(getPostMessage))
            .catch(error => res.status(400).send(error));
    },
    
    
};

export default recipeController;


