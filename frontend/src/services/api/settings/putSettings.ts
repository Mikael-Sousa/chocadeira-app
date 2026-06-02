import { URL } from '../../../utils/url';

export const putSettingsAPI = async (token: string | null, settings: { defaultTheme: boolean }) => {
  if (!token) {
    throw new Error("Token não encontrado");
  }

  const res = await fetch(`${URL}/settings`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(settings)
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};