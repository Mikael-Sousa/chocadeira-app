import { URL } from '../../../utils/url';

export const loginAPI = async (
  email: string,
  password: string
) => {
  try {
    const res = await fetch(`${URL}/users/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};