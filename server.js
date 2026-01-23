import express from "express"
import { database } from "./config/db.js";

const app = express();
const port = 8080;

import UserRouter from "./route/UserRoute.js"

database();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// api ends points
app.use("/users/api/v1", UserRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})