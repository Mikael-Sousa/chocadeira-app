import db from "../../shared/database/connection";

const create = async (
    { userId, sensor, status, value }:
        { userId: number, sensor: string, status: string, value: number }
) => {
    const result = await db.query(
        `
    INSERT INTO user_notifications (user_id, sensor, status, value)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
        [userId, sensor, status, value]
    );

    return result.rows[0];
};

const findByUserId = async (userId: number) => {
    const result = await db.query(
        `SELECT * FROM user_notifications WHERE user_id = $1 ORDER BY created_at DESC`,
        [userId]
    );

    return result.rows;
};

export default {
    findByUserId,
    create,
};