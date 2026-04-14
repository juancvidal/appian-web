export interface Venta {
  id: number;
  createdOn: string;
  modifiedOn: string;
  total: number;
  fechaVenta: string;
  createdBy: { id: string };
  modifiedBy: { id: string };
}

export const ventas: Venta[] = [
  {
    id: 1,
    createdOn: "2026-04-15T09:25:33Z",
    modifiedOn: "2026-05-08T14:22:17Z",
    total: 15847.5,
    fechaVenta: "2026-04-15Z",
    createdBy: { id: "mauricio.castaneda@pragma.com.co" },
    modifiedBy: { id: "juan.garzont@pragma.com.co" },
  },
  {
    id: 2,
    createdOn: "2026-03-28T14:50:12Z",
    modifiedOn: "2026-04-30T11:15:44Z",
    total: 32156.75,
    fechaVenta: "2026-03-28Z",
    createdBy: { id: "juan.pinedaa@pragma.com.co" },
    modifiedBy: { id: "andres.giraldos@pragma.com.co" },
  },
  {
    id: 3,
    createdOn: "2026-02-19T11:34:28Z",
    modifiedOn: "2026-05-05T16:48:33Z",
    total: 8923.25,
    fechaVenta: "2026-02-19Z",
    createdBy: { id: "mauro.ibarrap@pragma.com.co" },
    modifiedBy: { id: "juan.garzont@pragma.com.co" },
  },
  {
    id: 4,
    createdOn: "2026-05-02T16:18:09Z",
    modifiedOn: "2026-05-09T10:27:55Z",
    total: 45678.9,
    fechaVenta: "2026-05-02Z",
    createdBy: { id: "hernan.ortiz@pragma.com.co" },
    modifiedBy: { id: "andres.giraldos@pragma.com.co" },
  },
  {
    id: 5,
    createdOn: "2026-04-07T08:59:44Z",
    modifiedOn: "2026-05-01T13:39:28Z",
    total: 21034.6,
    fechaVenta: "2026-04-07Z",
    createdBy: { id: "david.betancur@pragma.com.co" },
    modifiedBy: { id: "juan.pinedaa@pragma.com.co" },
  },
  {
    id: 6,
    createdOn: "2026-03-14T13:31:22Z",
    modifiedOn: "2026-04-25T09:52:16Z",
    total: 12567.8,
    fechaVenta: "2026-03-14Z",
    createdBy: { id: "mauro.ibarrap@pragma.com.co" },
    modifiedBy: { id: "juan.vidal@pragma.com.co" },
  },
  {
    id: 7,
    createdOn: "2026-02-05T10:44:08Z",
    modifiedOn: "2026-05-07T15:18:42Z",
    total: 38945.15,
    fechaVenta: "2026-02-05Z",
    createdBy: { id: "juan.cuevas@pragma.com.co" },
    modifiedBy: { id: "hernan.ortiz@pragma.com.co" },
  },
  {
    id: 8,
    createdOn: "2026-04-22T15:12:55Z",
    modifiedOn: "2026-05-06T12:33:09Z",
    total: 19823.4,
    fechaVenta: "2026-04-22Z",
    createdBy: { id: "alejandro.sernaj@pragma.com.co" },
    modifiedBy: { id: "mauricio.castaneda@pragma.com.co" },
  },
  {
    id: 9,
    createdOn: "2026-03-09T12:40:38Z",
    modifiedOn: "2026-04-28T08:44:51Z",
    total: 27456.95,
    fechaVenta: "2026-03-09Z",
    createdBy: { id: "alejandro.sernaj@pragma.com.co" },
    modifiedBy: { id: "ana.vargasj@pragma.com.co" },
  },
  {
    id: 10,
    createdOn: "2026-05-01T09:21:44Z",
    modifiedOn: "2026-05-10T11:07:38Z",
    total: 54321.3,
    fechaVenta: "2026-05-01Z",
    createdBy: { id: "juan.garzont@pragma.com.co" },
    modifiedBy: { id: "juan.cuevas@pragma.com.co" },
  },
];
