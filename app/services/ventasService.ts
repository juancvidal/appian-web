import { Venta } from "../data/ventas";

export async function getVentas(): Promise<Venta[]> {
  const apiKey = process.env.APPIAN_API_KEY;
  const url = process.env.APPIAN_VENTAS_URL;

  if (!apiKey || !url) {
    throw new Error("Faltan variables de entorno: APPIAN_API_KEY o APPIAN_VENTAS_URL");
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Appian-API-Key": apiKey,
    },
    // En desarrollo no cachear para ver cambios al instante
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
  });

  if (!response.ok) {
    throw new Error(
      `Error al consultar la API de Appian: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data as Venta[];
}
