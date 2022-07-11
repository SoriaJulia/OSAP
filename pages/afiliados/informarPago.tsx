import Button from 'components/Base/Button';
import Field from 'components/Base/Field';
import PageTitle from 'components/Base/PageTitle';
import { NextPage } from 'next';
import Head from 'next/head';
import { changeFileInput, changeNumberInput, changeTextInput, nextFetch } from '@lib/utils';
import React, { useRef, useState } from 'react';
import { InputChangeHandler } from '@appTypes/reactCommon';
import { getSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { CurrencyCircleDollar, PaperPlaneRight, Receipt, Spinner, SpinnerGap, Upload } from 'phosphor-react';
import { SERVER_ERROR } from '@lib/constants';

const InformarPago: NextPage = () => {
  const [facturas, setFacturas] = useState('');
  const [importe, setImporte] = useState<number | ''>('');
  const [comprobante, setComprobante] = useState<File[]>([]);
  const [isSending, setIsSending] = useState(false);
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsSending(true);
    e.preventDefault();
    const session = await getSession();
    const formdata = new FormData();
    if (comprobante) formdata.append('comprobante', comprobante[0]);
    formdata.append('facturas', facturas);
    if (importe) formdata.append('importe', importe.toString());
    nextFetch(`afiliado/${session?.user?.agentId}/factura/informarPago`, {
      method: 'POST',
      body: formdata,
    })
      .then(({ error }) => {
        if (error) {
          return toast.error(error, { position: 'bottom-right', duration: 6000 });
        }
        return toast.success('¡Gracias por enviarnos tu pago! unos dias lo veras reflejado en tus facturas.', {
          duration: 6000,
          position: 'bottom-right',
          iconTheme: { primary: '#2dd4bf', secondary: '#f0fdfa' },
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(SERVER_ERROR, { position: 'bottom-right', duration: 6000 });
      })
      .finally(() => {
        setIsSending(false);
        setFacturas('');
        setImporte('');
        setComprobante([]);
        if (inputFileRef.current) inputFileRef.current.value = '';
      });
  };

  return (
    <div className="mt-4 flex flex-col items-center text-left ">
      <Head>
        <title>Informar Pago - OSAP</title>
      </Head>

      <form className="flex flex-col gap-6 lg:w-8/12">
        <div>
          <PageTitle title="Informar pago de facturas" icon={<CurrencyCircleDollar weight="light" />} />
          <p className="mb-2 text-xl text-blue-600">¿Cómo funciona?</p>
          <ol className="list-inside list-decimal">
            <li>Completa y enviá el formulario</li>
            <li>Durante los próximos días hábiles lo revisamos</li>
            <li>Si el pago es correcto actualizamos el estado de tus facturas</li>
          </ol>
          <p className="mt-4 text-sm">
            *El número de factura podes encontrarlo en{' '}
            <a className="text-teal-600 underline" href="/afiliados/facturacion">
              Pagos y facturación
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded bg-white p-6">
          <div className="-mt-2 flex flex-wrap gap-6 lg:gap-16 ">
            <Field
              label="Factura/s"
              helpText="Numeros de facturas correspondientes al pago, separados por una coma (,)"
              placeholder="1-45455, 1-302545"
              onChange={changeTextInput(setFacturas)}
              value={facturas}
              inputWidth="w-full"
            />
            <Field
              label="Importe"
              helpText="Importe depositado o transferido"
              placeholder="12000"
              type="number"
              onChange={changeNumberInput(setImporte)}
              value={importe}
              inputWidth="w-full"
            />
          </div>
          <Field
            label="Comprobante"
            type="file"
            accept="image/*,.pdf"
            onChange={changeFileInput(setComprobante)}
            ref={inputFileRef}
            helpText="Imagen o .pdf del comprobante de deposito o transferencia"
            inputWidth="w-5/6"
          />
          <Button
            className="self-end"
            label={isSending ? `Enviando...` : 'Enviar'}
            trailingIcon={
              isSending ? <SpinnerGap className="animate-spin" weight="bold" size={24} /> : <PaperPlaneRight />
            }
            type="submit"
            onClick={handleSubmit}
            disabled={!facturas || !importe || !comprobante[0]}
            showIconOnMobile
          />
        </div>
      </form>
    </div>
  );
};

export default InformarPago;
