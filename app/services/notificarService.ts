"use server";

export async function notificar(): Promise<string> {
  const apiKey = process.env.APPIAN_API_KEY;
  const url = process.env.APPIAN_NOTIFICAR;

  if (!apiKey || !url) {
    throw new Error("Faltan variables de entorno: APPIAN_API_KEY o APPIAN_NOTIFICAR");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Appian-API-Key": apiKey,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Error al notificar en Appian: ${response.status} ${response.statusText}`
    );
  }

  return response.text();
}
