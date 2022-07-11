import { GetServerSideProps, NextPage } from 'next';
import { Bank, CreditCard, CurrencyCircleDollar, Download } from 'phosphor-react';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { Factura } from '@appTypes/factura';
import { nextFetch } from '@lib/utils';
import { Credencial } from '@appTypes/credencial';
import { Autorizacion } from '@appTypes/autorizacion';
import Credenciales from 'components/Credencial/List';
import UltimasAutorizaciones from 'components/Facturacion/UltimasAutorizaciones';
import { useRouter } from 'next/router';
import { getLinkPago } from '@lib/facturacion';
import { Coseguro } from '@appTypes/coseguro';
import { AgenteCta } from '@appTypes/agenteCta';
import Button from '../../components/Base/Button';
import AfiliadosSectionsNav from '../../components/AfiliadosSectionsNav';
import UltimasFacturas from '../../components/Facturacion/UltimasFacturas';
import UltimosCoseguros from '../../components/Facturacion/UltimosCoseguros';

type AfiliadosPageProps = {
  facturas: Array<Factura>;
  credenciales: Array<Credencial>;
  autorizaciones: Array<Autorizacion>;
  coseguros: Array<Coseguro>;
  agente: AgenteCta;
};

export const Afiliados: NextPage<AfiliadosPageProps> = ({
  facturas,
  credenciales,
  autorizaciones,
  coseguros,
  agente,
}) => {
  const router = useRouter();
  const linkPago = getLinkPago(agente);
  return (
    <div className="flex flex-col items-center gap-3 divide-y-2 divide-white text-left">
      <Head>
        <title>OSAP - Tramites y consultas online</title>
      </Head>
      <AfiliadosSectionsNav />
      <Credenciales credenciales={credenciales} agentId={agente.id} />

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
        <UltimasFacturas facturas={facturas} />
        <UltimasAutorizaciones autorizaciones={autorizaciones} />
        <UltimosCoseguros coseguros={coseguros} />

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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session || session.status === 'unauthenicated') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const agentId = session.user?.agentId;
  let credenciales;
  let facturas;
  let autorizaciones;
  let coseguros;
  let agente;

  try {
    coseguros =
      (
        await nextFetch(`afiliado/${agentId}/coseguro`, {
          headers: { Cookie: req.headers.cookie || '' },
        })
      ).data || [];
  } catch (err) {
    console.error(err);
  }
  try {
    facturas =
      (
        await nextFetch(`afiliado/${agentId}/factura`, {
          headers: { Cookie: req.headers.cookie || '' },
        })
      ).data || [];
  } catch (err) {
    console.error(err);
  }
  try {
    credenciales =
      (
        await nextFetch(`afiliado/${agentId}/credencial`, {
          headers: { Cookie: req.headers.cookie || '' },
        })
      ).data || [];
  } catch (err) {
    console.error(err);
  }
  try {
    autorizaciones =
      (
        await nextFetch(`afiliado/${agentId}/autorizacion`, {
          headers: { Cookie: req.headers.cookie || '' },
        })
      ).data || [];
  } catch (err) {
    console.error(err);
  }

  try {
    agente = (await nextFetch('afiliado', { headers: { Cookie: req.headers.cookie || '' } })).data || {};
  } catch (err) {
    console.error(err);
  }
  return {
    props: { facturas, credenciales, autorizaciones, agentId, coseguros, agente },
  };
};

export default Afiliados;
