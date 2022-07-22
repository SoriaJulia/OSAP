import { Credencial } from '@appTypes/credencial';
import { queryService } from '@lib/utils';
import { getCosegurosAfiliado, getCredencialesGrupo } from '@services/agente';
import React from 'react';
import { useQuery } from 'react-query';
import CredencialCard from './Card';

type CredencialesProps = {
  credenciales: Array<Credencial>;
  agentId: string;
};

const Credenciales = ({ agentId }: { agentId: string }) => {
  const {
    data: credenciales,
    status,
    error,
  } = useQuery('credenciales', queryService(getCredencialesGrupo, agentId), { staleTime: 2.592e8 });

  if (status === 'loading') {
    return <p>loading crendenciales</p>;
  }

  if (status === 'error') {
    return <p>hubo un error</p>;
  }

  if (credenciales) {
    return (
      <section className="my-2 flex w-full flex-col  py-6">
        <h3 className="mb-4 text-3xl text-blue-800">Credenciales</h3>
        <div className="flex w-full flex-wrap justify-start gap-6 py-2">
          {credenciales.map((cred) => {
            return <CredencialCard credencial={cred} key={cred.Numero} agentId={agentId} />;
          })}
        </div>
      </section>
    );
  }
  return null;
};

export default Credenciales;
