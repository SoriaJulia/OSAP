/* eslint-disable react/destructuring-assignment */
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { Bank, CreditCard, Download, Note, Receipt, Scroll } from 'phosphor-react';
import { nextFetch } from '@lib/utils';
import { getSession } from 'next-auth/react';
import { Factura } from '@appTypes/factura';
import AutorizacionesTab from 'components/Facturacion/AutorizacionesTab';
import { Autorizacion } from '@appTypes/autorizacion';
import { useRouter } from 'next/router';
import Button from '../../components/Base/Button';
import PageTitle from '../../components/Base/PageTitle';
import Tabs, { TabsType } from '../../components/Base/Tabs';
import FacturasTab from '../../components/Facturacion/FacturasTab';
import CosegurosList from '../../components/Facturacion/CosegurosList';

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
  // {
  //   label: 'Coseguros y Cargos',
  //   index: 2,
  //   Component: CosegurosList,
  //   Icon: Receipt,
  //   significantProp: 'coseguros',
  // },
];
type FacturacionProps = {
  facturas: Array<Factura>;
  coseguros: Array<Factura>;
  autorizaciones: Array<Autorizacion>;
  agentId: string;
};

const Facturacion: NextPage<FacturacionProps> = (props) => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  const tab = tabs[selectedTab];
  const router = useRouter();

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
            trailingIcon={<Bank weight="fill" />}
            variant="fill"
            onClick={() => {
              router.push('/afiliados/mediosPago');
            }}
          />

          <Button
            label="Pago Online"
            trailingIcon={<CreditCard weight="fill" />}
            variant="fill"
            onClick={() =>
              window.open(
                `https://osapjubilados.prontopago.com.ar:4545/?serviceid=17944&Param1=${props.agentId}`,
                '_blank'
              )
            }
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
  // call consultar facturas
  try {
    const facturas = await nextFetch(`afiliado/${agentId}/factura`, {
      headers: { Cookie: req.headers.cookie || '' },
    });
    const autorizaciones = await nextFetch(`afiliado/${agentId}/autorizacion`, {
      headers: { Cookie: req.headers.cookie || '' },
    });
    return {
      props: { facturas, autorizaciones, agentId },
    };
  } catch (err) {
    console.error(err);

    // TODO check for default values for pages props
    return {
      props: {
        facturas: [],
        autorizaciones: [],
        agentId,
      },
    };
  }
};

export default Facturacion;
