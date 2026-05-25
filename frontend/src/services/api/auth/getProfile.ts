export const getProfileAPI = async (token: string | null) => {
  if (!token) {
    throw new Error("Token não encontrado");
  }

  const res = await fetch("http://localhost:4000/users/auth/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};