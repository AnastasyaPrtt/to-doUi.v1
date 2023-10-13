require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
// const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.static(path.relative(__dirname, 'static')))
// app.use(fileUpload({}))
app.use("/api", router);

//пишется в самом конце
app.use(errorHandler);

async function startApp() {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`SERVER WORKING ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}

startApp();
