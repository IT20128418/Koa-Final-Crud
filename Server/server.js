const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const app = new koa();
const connection = require("./dal/connection.js");

//import router
const userRouter = require("./routers/user.router.js");

app.use(bodyParser());
app.use(cors());

app.use(userRouter.routes()).use(userRouter.allowedMethods());
 
app.listen(8000, () => {
  console.log("server run on 8000");
});
