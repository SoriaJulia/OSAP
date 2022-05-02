import React from 'react';

const CosegurosTable = () => {
  return (
    <table className="w-auto table-fixed ">
      <thead className="border-b border-blue-300/60 text-blue-500">
        <tr>
          <th className="hidden px-8 pb-2 sm:table-cell md:px-1">Periodo</th>
          <th className="px-8 md:px-1 ">Fecha</th>
          <th className="w-80 px-4">Prestador</th>
          <th className="hidden px-8 md:table-cell md:px-1">Detalle</th>
          <th className="px-8 md:px-1">Importe</th>
        </tr>
      </thead>
      <tbody className="my-2">
        <tr>
          <td className="hidden  px-8 sm:table-cell md:px-1">03/2022</td>
          <td className="px-8 md:px-1">15/03/2022</td>
          <td className="w-80 px-4">ORITI TIZIO MARIANELLA / SANAT. D/L/MUJER</td>
          <td className="hidden px-8 md:table-cell md:px-1">CONSULTA MEDICA</td>
          <td className="px-8 md:px-1">$500</td>
        </tr>
        <tr>
          <td className="hidden  px-8 sm:table-cell md:px-1">03/2022</td>
          <td className="px-8 md:px-1">15/03/2022</td>
          <td className=" w-80 px-4">ORITI TIZIO MARIANELLA / SANAT. D/L/MUJER</td>
          <td className="hidden px-8 md:table-cell md:px-1">CONSULTA MEDICA</td>
          <td className="px-8 md:px-1">$500</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CosegurosTable;
