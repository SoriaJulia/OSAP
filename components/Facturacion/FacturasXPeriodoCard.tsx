import { downloadBase64File, nextFetch } from '@lib/utils';
import { useSession } from 'next-auth/react';
import { DownloadSimple } from 'phosphor-react';
import React from 'react';
import { Color, State } from '../../types/enums/facturas';
import { Factura } from '../../types/factura';

const formatPeriodo = (periodo: string) => {
  return `${periodo.slice(4)}-${periodo.slice(0, 4)}`;
};

const getFile = async (userId: string, compId: number) => {
  const { data, error } = await nextFetch(`afiliado/${userId}/factura/${compId}`);
  if (error) return;
  const name = `Factura-${compId}-OSAP.pdf`;
  downloadBase64File('application/pdf', data.file, name);
};
const FacturasXPeriodo: React.FC<{ facturas: Factura[]; periodo: string }> = ({ facturas, periodo }) => {
  const { data: session } = useSession();
  const userId = session?.user?.agentId || '';
  return (
    <div className="card flex w-96 flex-col gap-2 text-left">
      <h3 className="font-display text-xl font-semibold tracking-wide text-blue-600">
        Periodo: <span className="font-2xl">{formatPeriodo(periodo)}</span>
      </h3>
      <span className="text-lg text-gray-600">Vencimiento: {new Date(facturas[0].FecVen).toLocaleDateString()}</span>
      <div>
        {facturas.map((factura: Factura) => {
          return (
            <div className="mr-4 mt-1 grid grid-cols-facturas items-center gap-1" key={factura.CompId}>
              <span className="font-display">Nº {`${factura.Suc}-${factura.Nro}`}</span>
              <span className={`${Color[factura.Estado]}`}>{State[factura.Estado]}</span>
              <span className="text-right font-semibold text-gray-600">$ {factura.Total}</span>

              <DownloadSimple
                className="mr-1 cursor-pointer rounded-full p-1 text-blue-400 transition hover:bg-gray-100 hover:text-blue-500 lg:ml-1"
                size={28}
                onClick={() => {
                  getFile(userId, factura.CompId);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FacturasXPeriodo;
