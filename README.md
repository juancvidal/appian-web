# AppianWeb

Dashboard de ventas construido con **Next.js 16** que se integra con la plataforma **Appian** a través de sus Web APIs.

## ¿Qué hace?

- **Consulta ventas** desde Appian mediante una Web API REST y las muestra en una tabla interactiva con soporte de ordenamiento por columna.
- **Calcula métricas** en tiempo real: total de registros, valor total acumulado y promedio por venta.
- **Notifica procesos** en Appian con un botón que dispara un proceso vía Web API POST, mostrando retroalimentación visual al usuario.

## Stack

| Tecnología | Versión |
|---|---|
| Next.js | 16.2 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| TanStack Table | 8 |

## Estructura del proyecto

```
app/
├── components/
│   ├── VentasTable.tsx      # Tabla interactiva con ordenamiento
│   └── NotificarButton.tsx  # Botón cliente que invoca el Server Action
├── data/
│   └── ventas.ts            # Tipo Venta e interface
├── services/
│   ├── ventasService.ts     # Consulta GET a la Web API de ventas
│   └── notificarService.ts  # Server Action POST a la Web API de notificación
└── page.tsx                 # Página principal (Server Component)
```

## Variables de entorno

Crea un archivo `.env.local` en la raíz con las siguientes variables:

```env
APPIAN_API_KEY=tu_api_key_de_appian
APPIAN_VENTAS_URL=https://<instancia>.appiancloud.com/suite/webapi/ventas
APPIAN_NOTIFICAR=https://<instancia>.appiancloud.com/suite/webapi/notificar
```

> Las variables de entorno **nunca** se suben al repositorio (excluidas por `.gitignore`).

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build de producción

```bash
npm run build
npm start
```
