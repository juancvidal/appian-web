"use client";

import { useState } from "react";
import { notificar } from "../services/notificarService";

export default function NotificarButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);

  async function handleClick() {
    setLoading(true);
    setMessage(null);
    try {
      await notificar();
      setMessage({ text: "Notificación enviada correctamente.", ok: true });
    } catch (err) {
      setMessage({
        text: err instanceof Error ? err.message : "Error al enviar la notificación.",
        ok: false,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        onClick={handleClick}
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Notificando…
          </>
        ) : (
          "Notificar"
        )}
      </button>
      {message && (
        <p className={`text-sm ${message.ok ? "text-emerald-600" : "text-red-600"}`}>
          {message.text}
        </p>
      )}
    </div>
  );
}
