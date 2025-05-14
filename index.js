import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./src/router.js"
import { errorHandler, notFoundHandler } from "./src/middlewares/controllerWrapper.js";
import { xss } from "express-xss-sanitizer";

const app = express();

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use(xss());

app.use("/uploads", express.static("public/uploads"));

app.use(router);

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(3000, () => {
    console.log(`🚀 Listening on http://localhost:3000`);
});