import db from "../../../shared/database/connection"

const findByEmail = async (email: string) => {
    const result = await db.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    )
    return result.rows[0] || null
};

const findProfileByUserId = async (userId: number) => {
    const result = await db.query(
        `
    SELECT 
      id,
      name,
      email
    FROM users
    WHERE id = $1
    `,
        [userId]
    );

    return result.rows[0] || null;
};

const registerNewUser = async (
    name: string,
    email: string,
    password: string
) => {
    const result = await db.query(
        `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id, name, email, password
    `,
        [name, email, password]
    );

    return result.rows[0] || null;
};

export default {
    findByEmail,
    findProfileByUserId,
    registerNewUser,
};