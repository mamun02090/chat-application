const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const loginRouter= require('./router/loginRouter')
const inboxRouter= require('./router/inboxRouter')
const usersRouter= require('./router/usersRouter')
//internal import
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
//creating app
const app = express();
//config dotenv
dotenv.config();

//database connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connection successful"))
  .catch((err) => console.log(err));
//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");
//set static folder
app.use(express.static(path.join(__dirname, "public")));
//parse cookie
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

//routing setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter)

//404 not found error handler
app.use(notFoundHandler);

//common error handler
app.use(errorHandler);

//listener
app.listen(process.env.PORT, () => {
  console.log(`Connected to port ${process.env.PORT}`);
});
