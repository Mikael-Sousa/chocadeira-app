import db from "../../shared/database/connection";

const getDeviceById = async (deviceId: string) => {
  const result = await db.query(
    `
    SELECT * FROM devices WHERE device_id = $1
    `,
    [deviceId]
  );
  return result.rows[0] || null;
};

const upsertIncubationStart = async (deviceId: string) => {
  const result = await db.query(
    `
    INSERT INTO devices (device_id, incubation_started_at, expected_hatch_date, incubation_status)
    VALUES ($1, NOW(), NOW() + INTERVAL '21 days', 'active')
    ON CONFLICT (device_id) DO UPDATE
      SET incubation_started_at = NOW(),
          expected_hatch_date = NOW() + INTERVAL '21 days',
          incubation_status = 'active'
    RETURNING *
    `,
    [deviceId]
  );

  return result.rows[0];
};

const updateStatus = async (deviceId: string, status: string) => {
  const result = await db.query(
    `
    UPDATE devices
    SET incubation_status = $2
    WHERE device_id = $1
    RETURNING *
    `,
    [deviceId, status]
  );
  return result.rows[0] || null;
};

export default {
  getDeviceById,
  upsertIncubationStart,
  updateStatus,
};
