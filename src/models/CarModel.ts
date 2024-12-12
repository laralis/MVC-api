import { createConnection } from "../config";

export class CarModel {
  async getAll() {
    const connection = await createConnection();
    const [result] = await connection.execute("select * from cars;");
    await connection.end();
    return result;
  }
  async getOne(id: number) {
    const connection = await createConnection();
    const [result] = await connection.execute(
      `select * from cars where id=?;`,[id]
    );
    await connection.end();
    return result[0];
  }
}
