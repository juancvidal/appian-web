"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Venta } from "../data/ventas";

const columnHelper = createColumnHelper<Venta>();

function formatDate(dateStr: string) {
  const date = new Date(dateStr.replace("Z", "").replace(/Z$/, ""));
  return date.toLocaleDateString("es-CO", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  });
}

function formatDateTime(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleString("es-CO", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  }).format(value);
}

function extractUsername(email: string) {
  return email.split("@")[0].replace(/\./g, " ");
}

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => (
      <span className="font-mono text-sm font-semibold text-indigo-600">
        #{info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("fechaVenta", {
    header: "Fecha Venta",
    cell: (info) => formatDate(info.getValue()),
  }),
  columnHelper.accessor("total", {
    header: "Total",
    cell: (info) => (
      <span className="font-semibold text-emerald-700">
        {formatCurrency(info.getValue())}
      </span>
    ),
  }),
  columnHelper.accessor("createdBy", {
    header: "Creado por",
    cell: (info) => (
      <div>
        <p className="font-medium capitalize">{extractUsername(info.getValue().id)}</p>
        <p className="text-xs text-gray-400">{info.getValue().id}</p>
      </div>
    ),
  }),
  columnHelper.accessor("createdOn", {
    header: "Fecha Creación",
    cell: (info) => (
      <span className="text-sm text-gray-600">{formatDateTime(info.getValue())}</span>
    ),
  }),
  columnHelper.accessor("modifiedBy", {
    header: "Modificado por",
    cell: (info) => (
      <div>
        <p className="font-medium capitalize">{extractUsername(info.getValue().id)}</p>
        <p className="text-xs text-gray-400">{info.getValue().id}</p>
      </div>
    ),
  }),
  columnHelper.accessor("modifiedOn", {
    header: "Última Modificación",
    cell: (info) => (
      <span className="text-sm text-gray-600">{formatDateTime(info.getValue())}</span>
    ),
  }),
];

interface VentasTableProps {
  data: Venta[];
}

export default function VentasTable({ data }: VentasTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="cursor-pointer select-none whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    <span className="text-gray-400">
                      {header.column.getIsSorted() === "asc"
                        ? " ↑"
                        : header.column.getIsSorted() === "desc"
                        ? " ↓"
                        : " ↕"}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {table.getRowModel().rows.map((row, idx) => (
            <tr
              key={row.id}
              className={`hover:bg-indigo-50 transition-colors ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="whitespace-nowrap px-4 py-3 text-gray-700">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
