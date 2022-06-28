const Router = require("@koa/router");

const { 
    register,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    loginUser,
} = require("../api/student.api.js");

const userRouter = new Router({
    prefix:"/user"
});

userRouter.post("/register", register);
userRouter.get("/getAll", getAllUsers);
userRouter.get("/getOne/:id",getUser);
userRouter.delete("/deleteOne/:id",deleteUser);
userRouter.put("/updateOne/:id",updateUser);
userRouter.get("/login",loginUser);

module.exports = userRouter;
