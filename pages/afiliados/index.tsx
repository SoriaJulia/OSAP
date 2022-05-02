import { NextPage } from 'next';
import { Bank, CreditCard, Receipt, Download } from 'phosphor-react';
import Head from 'next/head';
import Button from '../../components/Base/Button';
import AfiliadosSectionsNav from '../../components/AfiliadosSectionsNav';
import FacturasTable from '../../components/FacturasTable';
import CosegurosTable from '../../components/CosegurosTable';

export const Afiliados: NextPage<{ user: any }> = ({ user }) => {
  return (
    <div>
      <Head>
        <title>OSAP - Tramites y consultas online</title>
      </Head>
      <div className="flex h-32 w-screen flex-col justify-center gap-4 bg-gradient-to-t from-blue-300/60 to-blue-100/80 p-2 text-blue-500 md:h-44">
        <p className="xd:text-2xl text-xl md:text-5xl">¡Hola! Te damos la bienvenida</p>
        <h1 className="text-lg xs:text-xl">Realiza tus tramites y consultas online</h1>
      </div>
      <AfiliadosSectionsNav />
      <section className="flex flex-col items-center">
        <h3 className="text-3xl text-blue-800">Pagos y facturación</h3>
        <div className="flex w-full justify-center gap-1 px-2 pb-4 pt-6 sm:gap-4 sm:px-6 xs:gap-2">
          <Button label="Medios de pago" variant="yellowOutlined" leadingIcon={<Bank size={24} />} />
          <Button label="Pago online" variant="yellowOutlined" leadingIcon={<CreditCard size={24} />} />
          <Button label="Informar pago" variant="yellowOutlined" leadingIcon={<Receipt size={24} />} />
        </div>
        <article className="flex w-screen flex-col overflow-x-scroll bg-white py-4 px-6 text-left md:m-2 lg:my-2 lg:w-3/4">
          <div className="mb-4 flex  gap-4 sm:justify-between ">
            <h4 className=" text-lg text-grey-400">Ultimas Facturas</h4>
            <button type="button" className="text-left text-blue-400 decoration-blue-300 hover:underline ">
              Ver todas
            </button>
          </div>
          <FacturasTable />
        </article>
        <article className="mt-6 flex w-screen flex-col overflow-x-scroll bg-white py-4 px-6 text-left md:m-2 lg:my-2 lg:w-3/4">
          <div className="mb-4 flex  gap-4 sm:justify-between ">
            <h4 className=" text-lg text-grey-400">Ultimos coseguros y cargos</h4>
            <button type="button" className="text-left text-blue-400 decoration-blue-300 hover:underline ">
              Ver todos
            </button>
          </div>
          <CosegurosTable />
        </article>
        <article className="mt-2 w-full px-4 text-left md:px-8 lg:w-3/4 lg:px-0">
          <a
            href="/formulario"
            className="flex items-center gap-2 py-2 text-blue-700 transition-all hover:text-blue-500 hover:underline hover:decoration-blue-500 md:text-lg"
          >
            <Download /> Formulario de acreditación automática de reintegros
          </a>
          <a
            href="/formulario2"
            className="flex items-center gap-2 py-2 text-blue-700 decoration-blue-300 hover:text-blue-500 hover:underline hover:decoration-blue-500 md:text-lg"
          >
            <Download /> Formulario de autorización débito automático de cuenta bancaria
          </a>
        </article>
      </section>
    </div>
  );
};

export default Afiliados;
