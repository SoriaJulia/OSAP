/* eslint-disable react/destructuring-assignment */
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { Bank, CreditCard, CurrencyCircleDollar, Download, Note, Receipt, Scroll } from 'phosphor-react';
import { nextFetch } from '@lib/utils';
import { getSession } from 'next-auth/react';
import { Factura } from '@appTypes/factura';
import AutorizacionesTab from 'components/Facturacion/AutorizacionesTab';
import { Autorizacion } from '@appTypes/autorizacion';
import { useRouter } from 'next/router';
import { getLinkPago } from '@lib/facturacion';
import { Coseguro } from '@appTypes/coseguro';
import { AgenteCta } from '@appTypes/agenteCta';
import Button from '../../components/Base/Button';
import PageTitle from '../../components/Base/PageTitle';
import Tabs, { TabsType } from '../../components/Facturacion/Tabs';
import FacturasTab from '../../components/Facturacion/FacturasTab';
import CosegurosTab from '../../components/Facturacion/CosegurosTab';

// Tabs Array
const tabs: TabsType = [
  {
    label: 'Facturas',
    index: 0,
    Component: FacturasTab,
    Icon: Scroll,
    significantProp: 'facturas',
  },
  {
    label: 'Autorizaciones',
    index: 1,
    Component: AutorizacionesTab,
    Icon: Note,
    significantProp: 'autorizaciones',
  },
  {
    label: 'Coseguros y Cargos',
    index: 2,
    Component: CosegurosTab,
    Icon: Receipt,
    significantProp: 'coseguros',
  },
];
type FacturacionProps = {
  facturas: Array<Factura>;
  coseguros: Array<Coseguro>;
  autorizaciones: Array<Autorizacion>;
  agente: AgenteCta;
};

const Facturacion: NextPage<FacturacionProps> = (props) => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  const tab = tabs[selectedTab];
  const router = useRouter();
  const linkPago = getLinkPago(props.agente);
  return (
    <div>
      <Head>
        <title>Pagos y Facturación - OSAP</title>
      </Head>
      <div className="flex flex-wrap items-center justify-between">
        <PageTitle title="Pagos y facturación" />
        <div className="flex gap-3">
          <Button
            label="Medios de pago"
            trailingIcon={<Bank size={22} />}
            variant="fill"
            onClick={() => {
              router.push('/afiliados/mediosPago');
            }}
          />
          <Button
            label="Pago Online"
            trailingIcon={<CreditCard size={22} />}
            variant="fill"
            onClick={() => window.open(linkPago, '_blank')}
          />
          <Button
            label="Informar pago"
            variant="fill"
            trailingIcon={<CurrencyCircleDollar size={22} />}
            onClick={() => router.push('/afiliados/informarPago')}
          />
        </div>
      </div>
      <section className="mt-2">
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} payload={props[tab.significantProp]} />
      </section>
      <section className="mt-6">
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
  let facturas;
  let autorizaciones;
  let coseguros;
  let agente;

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
    agente = (await nextFetch('afiliado', { headers: { Cookie: req.headers.cookie || '' } })).data || {};
  } catch (err) {
    console.error(err);
  }
  return {
    props: { facturas, autorizaciones, coseguros, agente },
  };
};

export default Facturacion;
