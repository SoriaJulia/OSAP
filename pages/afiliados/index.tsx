/* eslint-disable camelcase */
import { GetServerSideProps, NextPage } from 'next';
import { Bank, CreditCard, CurrencyCircleDollar, Download } from 'phosphor-react';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import { Factura } from '@appTypes/factura';
import { nextFetch, queryService } from '@lib/utils';
import { Credencial } from '@appTypes/credencial';
import { Autorizacion } from '@appTypes/autorizacion';
import Credenciales from 'components/Credencial/List';
import UltimasAutorizaciones from 'components/Facturacion/UltimasAutorizaciones';
import { useRouter } from 'next/router';
import { getLinkPago } from '@lib/facturacion';
import { Coseguro } from '@appTypes/coseguro';
import { AgenteCta } from '@appTypes/agenteCta';
import { dehydrate, QueryClient, QueryFunctionContext, useQuery } from 'react-query';
import Button from '@components/Base/Button';
import AfiliadosSectionsNav from '@components/AfiliadosSectionsNav';
import UltimasFacturas from '@components/Facturacion/UltimasFacturas';
import UltimosCoseguros from '@components/Facturacion/UltimosCoseguros';
import {
  getAgente,
  getAutorizacionesAfiliado,
  getCosegurosAfiliado,
  getCredencialesGrupo,
  getFacturasAfiliado,
  ServiceFunction,
} from '@services/agente';
import { unstable_getServerSession } from 'next-auth';
import { nextAuthOptions } from 'pages/api/auth/[...nextauth]';
import User from '@appTypes/user';

// TODO rename

type AfiliadosPageProps = {
  user: User;
};

export const Afiliados = ({ user }: AfiliadosPageProps) => {
  const router = useRouter();
  const linkPago = getLinkPago(user.agentId, user.convenio);

  return (
    <div className="flex flex-col items-center gap-3 divide-y-2 divide-white text-left">
      <Head>
        <title>OSAP - Tramites y consultas online</title>
      </Head>
      <AfiliadosSectionsNav />
      <Credenciales agentId={user.agentId} />

      <section className="flex w-full flex-col items-start pt-8">
        <h3 className="mb-6 text-3xl text-blue-800 md:mb-0">Pagos y facturación</h3>
        <div className="flex w-full justify-end gap-1 px-2 pb-4 sm:gap-4 sm:px-6 xs:gap-2">
          <Button
            label="Medios de pago"
            variant="yellowOutlined"
            leadingIcon={<Bank size={24} />}
            onClick={() => router.push('/afiliados/mediosPago')}
          />
          <Button
            label="Pago online"
            variant="yellowOutlined"
            leadingIcon={<CreditCard size={24} />}
            onClick={() => window.open(linkPago, '_blank')}
          />
          <Button
            label="Informar pago"
            variant="yellowOutlined"
            leadingIcon={<CurrencyCircleDollar size={24} />}
            onClick={() => router.push('/afiliados/informarPago')}
          />
        </div>
        <UltimasFacturas agentId={user.agentId} />
        <UltimasAutorizaciones agentId={user.agentId} />
        <UltimosCoseguros agentId={user.agentId} />

        <article className="mt-2 w-full px-4 text-left md:px-8 lg:w-3/4 lg:px-0">
          <a
            href="http://www.osapsalud.com.ar/descargar_pdf.php?archivo=wordpress/wp-content/uploads/folleto_reintegros_2016.pdf"
            className="flex items-center gap-2 py-2 text-blue-700 transition-all hover:text-blue-500 hover:underline hover:decoration-blue-500 md:text-lg"
            target="_blank"
          >
            <Download /> Formulario de acreditación automática de reintegros
          </a>
          <a
            href="http://www.osapsalud.com.ar/descargar_pdf.php?archivo=wordpress/wp-content/uploads/AUTORIZACION%20DE%20DEBITO%20AUTOMATICO%20OSAP.pdf"
            className="flex items-center gap-2 py-2 text-blue-700 decoration-blue-300 hover:text-blue-500 hover:underline hover:decoration-blue-500 md:text-lg"
            target="_blank"
          >
            <Download /> Formulario de autorización débito automático de cuenta bancaria
          </a>
        </article>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, nextAuthOptions);

  if (!session || session.status === 'unauthenicated' || !session.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const { agentId } = session.user;

  const queryClient = new QueryClient();

  // transform react-query keys into constants. create time constants(1 week, 3 days, etc)

  // TODO test what happens when one query takes too long.
  await queryClient.prefetchQuery('credenciales', queryService(getCredencialesGrupo, agentId), { staleTime: 6.048e8 });
  await queryClient.prefetchQuery('coseguros', queryService(getCosegurosAfiliado, agentId), { staleTime: 2.592e8 });
  await queryClient.prefetchQuery('facturas', queryService(getFacturasAfiliado, agentId), { staleTime: 2.592e8 });
  await queryClient.prefetchQuery('autorizacion', queryService(getAutorizacionesAfiliado, agentId), {
    staleTime: 2.592e8,
  });

  return {
    props: {
      user: session.user,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Afiliados;
