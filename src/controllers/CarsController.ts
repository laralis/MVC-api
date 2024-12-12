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
  async update(req: Request, res: Response) {
    const id = req.params.id;
    const newRow = req.body;
    const carModel = new CarModel();
    const result = await carModel.update(id, newRow);
    res.send(result);
  }
  async insert(req: Request, res: Response) {
    const newRow = req.body;
    const carModel = new CarModel();
    const result = await carModel.insert(newRow);
    res.status(201).send(result);
  }
  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const carModel = new CarModel();
    const result = await carModel.delete(+id);
    res.status(200).send(result);
  }
}
