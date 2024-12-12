import express from "express";
import { CarsController } from "./controllers/CarsController";

export const router = express.Router();

const carsController = new CarsController();

router.get("/cars", carsController.getAll);
router.get("/cars/:id", carsController.getOne);
router.put("/cars/:id", carsController.update);
router.post("/cars", carsController.insert);
router.delete("/cars/:id", carsController.delete);
