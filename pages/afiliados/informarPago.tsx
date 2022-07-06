import Button from 'components/Base/Button';
import Field from 'components/Base/Field';
import PageTitle from 'components/Base/PageTitle';
import { NextPage } from 'next';
import Head from 'next/head';
import { changeNumberInput, changeTextInput, nextFetch } from '@lib/utils';
import React, { useRef, useState } from 'react';
import { InputChangeHandler } from '@appTypes/reactCommon';
import { getSession } from 'next-auth/react';

const InformarPago: NextPage = () => {
  const [facturas, setFacturas] = useState('');
  const [importe, setImporte] = useState(0);
  const [comprobante, setComprobante] = useState<File[]>();

  const changeFileInput =
    (setterFn: React.Dispatch<React.SetStateAction<Array<File> | undefined>>): InputChangeHandler =>
    (e) => {
      const files = e.target.files && Array.from(e.target.files);
      setterFn(files || []);
    };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const session = await getSession();
    const formdata = new FormData();
    if (comprobante) formdata.append('comprobante', comprobante[0]);
    formdata.append('facturas', facturas);
    formdata.append('importe', importe.toString());
    nextFetch(`afiliado/${session?.user?.agentId}/factura/informarPago`, {
      method: 'POST',
      body: formdata,
    });
  };
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
            onChange={changeTextInput(setFacturas)}
          />
          <Field
            label="Importe"
            helpText="Ingresa el importe depositado o transferido"
            placeholder="12000"
            type="number"
            onChange={changeNumberInput(setImporte)}
          />
          <Field label="Comprobante" type="file" accept="image/*,.pdf" onChange={changeFileInput(setComprobante)} />
          <Button
            label="Enviar"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default InformarPago;
