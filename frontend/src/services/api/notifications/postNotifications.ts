import { URL } from '../../../utils/url';

export const postNotificationsAPI = async (token: string | null,
  notification:
    {
      sensor: string,
      status: string,
      value: number
    }) => {
  if (!token) {
    throw new Error("Token não encontrado");
  }

  const res = await fetch(`${URL}/notifications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(notification)
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};