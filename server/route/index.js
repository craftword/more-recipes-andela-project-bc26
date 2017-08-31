import create from "../controllers/createUser";
import signIn from "../controllers/signIn";
import createRecipes from "../controllers/createGroup"; 


const appApi = (app) => {
    app.get("/api/", (req, res) => res.status(200).send({
        message: "Welcome to the PostIT API!",
    }));
    // login and signIn
    app.post("/api/user/signup", create);
    app.post("/api/user/signin", signIn);
    // Recipe
    app.post("/api/recipes", createRecipes);
    app.put("/api/recipes/:recipeId", modifyRecipe);
    app.delete("/api/recipes/:recipeId", deleteRecipe);
    app.get("/api/recipes", getAllRecipes);
    app.post("/api/recipes/:recipeId/review", postComment);

    //Favorite
    app.get("/api/users/:recipeId/recipes", getFavorites);

    //Search 
};

export default appApi;