import Button from 'components/Base/Button';
import Field from 'components/Base/Field';
import PageTitle from 'components/Base/PageTitle';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const InformarPago: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Informar Pago - OSAP</title>
      </Head>
      <PageTitle title="Informar pago de facturas" />
      <div>
        <form>
          <Field
            label="Factura/s"
            helpText="Ingresa los numeros de facturas correspondientes al pago separados por una coma"
            placeholder="1-45455, 1-302545"
          />
          <Field
            label="Importe"
            helpText="Ingresa el importe depositado o transferido"
            placeholder="12000"
            type="number"
          />
          <Field label="Comprobante" type="file" accept="image/*,.pdf" />
          <Button label="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default InformarPago;
