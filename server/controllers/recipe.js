import models from "../models";
const recipe = models.Recipes;


const recipeController = {
    create(req, res) {
        return recipe
            .create({
                groupId: req.params.groupId,
                message: req.body.message,
               
            })
            .then(getPostMessage => res.status(201).send(getPostMessage))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return recipe
            .findAll({
                where: {
                    groupId: req.params.groupId,
                }
            })
            .then(getPostMessage => res.status(200).send(getPostMessage))
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


