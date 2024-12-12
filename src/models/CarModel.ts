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
      `select * from cars where id=?;`,
      [id]
    );
    await connection.end();
    return result[0];
  }
  async update(
    id: number,
    { name, description }: { name?: string; description?: string }
  ) {
    const connection = await createConnection();
    const [result] = await connection.execute(
      `UPDATE cars
      SET name = ?,
      description = ?
      WHERE id = ?;
      `,
      [name, description, id]
    );
    await connection.end();
    return result;
  }
  async insert({ name, description }: { name: string; description: string }) {
    const connection = await createConnection();
    const [result] = await connection.execute(
      `INSERT INTO cars (name, description) VALUES (?, ?)`,
      [name, description]
    );
    await connection.end();
    return result;
  }
  async delete(id: number) {
    const connection = await createConnection();
    const [result] = await connection.execute(`delete from cars where id=?`, [
      id,
    ]);
    await connection.end();
    return result;
  }
}
