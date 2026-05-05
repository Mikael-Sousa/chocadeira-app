import db from "../../shared/database/connection";

const findByEspId = async (espId: string) => {
  const result = await db.query(
    "SELECT * FROM devices WHERE esp_id = $1",
    [espId]
  );

  return result.rows[0] || null;
};

const createDevice = async (espId: string) => {
  const result = await db.query(
    "INSERT INTO devices (esp_id) VALUES ($1) RETURNING id",
    [espId]
  );

  return { id: result.rows[0].id };
};

export default {
  findByEspId,
  createDevice,
};