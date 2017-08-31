import create from "../controllers/createUser";
import signIn from "../controllers/signIn";
import recipe from "../controllers/recipeController"; 


const appApi = (app) => {
    app.get("/api/", (req, res) => res.status(200).send({
        message: "Welcome to the PostIT API!",
    }));
    // login and signIn
    app.post("/api/user/signup", create);
    app.post("/api/user/signin", signIn);
    // Recipe
    app.post("/api/recipes", recipe.create);
    app.put("/api/recipes/:recipeId", recipe.update);
    app.delete("/api/recipes/:recipeId", recipe.delete);
    app.get("/api/recipes", recipe.list);
    //app.post("/api/recipes/:recipeId/review", postComment);

    //Favorite
    //app.get("/api/users/:recipeId/recipes", getFavorites);

    //Search 
};

export default appApi;