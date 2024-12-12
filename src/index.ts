import "dotenv/config";
import express from "express";
import { router } from "./router";

const app = express();

app.use(express.json());

app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Conectado a porta ${port}`);
});
