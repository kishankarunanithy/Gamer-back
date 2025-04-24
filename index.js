import "dotenv/config"


import express from "express"
import cors from "cors"

import { router } from "./src/router.js"
import { errorHandler, notFoundHandler } from "./src/middlewares/controllerWrapper.js";

const app = express();

app.use(express.json());

app.use(router);

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(3000, () => {
    console.log(`🚀 Listening on http://localhost:3000`);
});