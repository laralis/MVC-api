import express from "express";
import { CarsController } from "./controllers/CarsController";

export const router = express.Router();

const carsController = new CarsController();

router.get("/cars", carsController.getAll);
router.get("/cars/:id", carsController.getOne);
