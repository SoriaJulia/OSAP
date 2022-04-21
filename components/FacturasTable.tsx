import { Download, Receipt } from 'phosphor-react';
import React from 'react';

const FacturasTable = () => {
  return (
    <table className="w-auto table-fixed ">
      <thead className="border-b border-blue-300/60 text-blue-500">
        <tr>
          <th className="hidden px-8 pb-2 sm:table-cell sm:px-1">Periodo</th>
          <th className="px-8 sm:px-1 ">Vencimiento</th>
          <th className="hidden px-4 md:table-cell">Nro de factura</th>
          <th className="px-8 sm:px-1">Estado</th>
          <th className="px-8 sm:px-1">Importe</th>
          <th className="w-12 sm:w-20" />
        </tr>
      </thead>
      <tbody className="my-2">
        <tr>
          <td className="hidden  px-8 sm:table-cell sm:px-1">04/2022</td>
          <td className="px-8 sm:px-1">15/05/2022</td>
          <td className="hidden px-4 md:table-cell">2-5244125</td>
          <td className="px-8 sm:px-1">Pendiente</td>
          <td className="px-8 sm:px-1">$34.344</td>
          <td className="flex gap-2 py-2 text-blue-400">
            <Download size={24} />
            <Receipt size={24} />
          </td>
        </tr>
        <tr className="my-2">
          <td className="hidden  px-8 sm:table-cell sm:px-1">04/2022</td>
          <td className="px-8 sm:px-1">15/05/2022</td>
          <td className="hidden px-4 md:table-cell">2-5244125</td>
          <td className="px-8 sm:px-1">Pendiente</td>
          <td className="px-8 sm:px-1">$34.344</td>
          <td className="flex gap-2 py-2 text-blue-400">
            <Download size={24} />
            <Receipt size={24} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FacturasTable;
