import { URL } from '../../../utils/url';

export const registerAPI = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await fetch(`${URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
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
