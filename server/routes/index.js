import create from "../controllers/createUser";
import signIn from "../controllers/signIn";
import recipeController from "../controllers/recipe"; 


const appApi = (app) => {
    app.get("/api/", (req, res) => res.status(200).send({
        message: "Welcome to the More-Recipe API!",
    }));
    // login and signIn
    app.post("/api/user/signup", create);
    app.post("/api/user/signin", signIn);
    // Recipe
    app.post("/api/recipes", recipeController.create);
    app.put("/api/recipes/:recipeId", recipeController.update);
    app.delete("/api/recipes/:recipeId", recipeController.delete);
    app.get("/api/recipes", recipeController.list);
    //app.post("/api/recipes/:recipeId/review", postComment);

    //Favorite
    //app.get("/api/users/:recipeId/recipes", getFavorites);

    //Search 
};

export default appApi;