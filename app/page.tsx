import VentasTable from "./components/VentasTable";
import NotificarButton from "./components/NotificarButton";
import Navbar from "./components/Navbar";
import { Venta } from "./data/ventas";
import { getVentas } from "./services/ventasService";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  }).format(value);

export default async function Home() {
  let ventas: Venta[] = [];
  let errorMessage: string | null = null;

  try {
    ventas = await getVentas();
  } catch (err) {
    errorMessage = err instanceof Error ? err.message : "Error desconocido al cargar los datos.";
  }

  const totalSum = ventas.reduce((acc, v) => acc + v.total, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard de Integración Appian</h1>
          <p className="text-gray-500 mt-1">
            Ejemplos de integración con Appian desde una aplicación web externa usando Web APIs REST.
          </p>
        </div>

        {/* Error banner */}
        {errorMessage && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <span className="font-semibold">Error al cargar datos: </span>
            {errorMessage}
          </div>
        )}

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Total registros</p>
            <p className="text-3xl font-bold text-indigo-600">{ventas.length}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Valor total acumulado</p>
            <p className="text-2xl font-bold text-emerald-600">{formatCurrency(totalSum)}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Promedio por venta</p>
            <p className="text-2xl font-bold text-amber-600">
              {ventas.length > 0 ? formatCurrency(totalSum / ventas.length) : "—"}
            </p>
          </div>
        </div>

        {/* Notificar — llamada a proceso */}
        <div className="mb-8">
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Integración 1</span>
              <span className="h-px flex-1 bg-indigo-100" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Llamada a proceso Appian vía Web API</h2>
            <p className="text-sm text-gray-500 mt-1 max-w-2xl">
              Este formulario invoca un proceso de Appian de forma externa mediante una <strong>Web API REST (POST)</strong>.
              Al enviar, Next.js ejecuta un <em>Server Action</em> que realiza la petición al endpoint de Appian con autenticación
              por API Key, pasando el correo y el mensaje como payload JSON. El proceso en Appian recibe los datos
              y puede ejecutar cualquier lógica de negocio, como enviar un correo o registrar un evento.
            </p>
          </div>
          <NotificarButton />
        </div>

        {/* Table section — consulta BD vía Web API */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Integración 2</span>
              <span className="h-px flex-1 bg-emerald-100" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Consulta de datos desde BD de Appian vía Web API</h2>
            <p className="text-sm text-gray-500 mt-1 max-w-2xl">
              La tabla consume una <strong>Web API REST (GET)</strong> publicada en Appian que expone registros
              almacenados en la base de datos de la plataforma. Next.js realiza la petición en el servidor
              (Server Component) usando la API Key como credencial, transforma la respuesta JSON y la renderiza
              en esta tabla con soporte de ordenamiento por columna.
            </p>
            <div className="flex items-center justify-end mt-3">
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                Haz clic en una columna para ordenar
              </span>
            </div>
          </div>

          {ventas.length === 0 && !errorMessage ? (
            <p className="text-center py-10 text-gray-400">No hay registros disponibles.</p>
          ) : (
            <VentasTable data={ventas} />
          )}
        </div>
      </main>
    </div>
  );
}
