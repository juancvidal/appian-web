import VentasTable from "./components/VentasTable";
import NotificarButton from "./components/NotificarButton";
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
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">AppianWeb</span>
          </div>
          <span className="text-sm text-gray-400">Dashboard de Ventas</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Registro de Ventas</h1>
          <p className="text-gray-500 mt-1">
            Consulta el historial completo de transacciones registradas en el sistema.
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

        {/* Notificar */}
        <div className="mb-4">
          <NotificarButton />
        </div>

        {/* Table section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-800">Transacciones</h2>
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
              Haz clic en una columna para ordenar
            </span>
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
