import { CarModel } from "./../models/CarModel";
import { Request, Response } from "express";

export class CarsController {
  async getAll(req: Request, res: Response) {
    const carModel = new CarModel();
    const result = await carModel.getAll();
    res.send(result);
  }
  async getOne(req: Request, res: Response) {
    const id = req.params.id;
    const carModel = new CarModel();
    const result = await carModel.getOne(+id);
    if (!result) {
      res.status(404).send({ message: "Resource not found" });
    }
    res.send(result);
  }
  
}