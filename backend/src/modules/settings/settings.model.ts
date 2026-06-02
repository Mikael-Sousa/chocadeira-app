import db from "../../shared/database/connection";

const findByUserId = async (userId: number) => {
    const result = await db.query(
        `SELECT * FROM user_settings WHERE user_id = $1`,
        [userId]
    );

    return result.rows[0] || null;
};

const create = async (userId: number) => {
    const result = await db.query(
        `
    INSERT INTO user_settings (user_id)
    VALUES ($1)
    RETURNING *
    `,
        [userId]
    );

    return result.rows[0];
};

const update = async (userId: number, data: { defaultTheme: boolean }) => {
    const result = await db.query(
        `
    UPDATE user_settings
    SET
      default_theme = $1
    WHERE user_id = $2
    RETURNING *
    `,
        [
            data.defaultTheme,
            userId
        ]
    );

    return result.rows[0];
};

export default {
    findByUserId,
    create,
    update
};