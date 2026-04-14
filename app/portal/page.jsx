import AppianFormClient from "@/app/components/AppianFormClient";
import Navbar from "@/app/components/Navbar";

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard de Integración Appian</h1>
          <p className="text-gray-500 mt-1">
            Ejemplos de integración con Appian desde una aplicación web externa usando Web APIs REST.
          </p>
        </div>

        {/* Interfaz embebida */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-violet-500">Integración 3</span>
              <span className="h-px flex-1 bg-violet-100" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Interfaz Appian embebida (SAIL)</h2>
            <p className="text-sm text-gray-500 mt-1 max-w-2xl">
              Este panel renderiza una <strong>interfaz SAIL de Appian directamente en la página</strong> usando
              el componente web oficial <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">&lt;appian-action&gt;</code>.
              El script <em>embeddedBootstrap</em> se carga desde el entorno de Appian y monta el formulario
              del proceso indicado por su UUID, permitiendo que el usuario interactúe con él sin salir de
              esta aplicación. Es ideal para exponer formularios de Appian en portales externos.
            </p>
          </div>
          <AppianFormClient />
        </div>
      </main>
    </div>
  );
}
