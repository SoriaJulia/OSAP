import { NextPage } from 'next';
import Head from 'next/head';
import { Clock, Phone, Question, ShoppingCart, WhatsappLogo, MapPin, DownloadSimple, Bicycle } from 'phosphor-react';
import React from 'react';
import Button from '../components/Base/Button';
import ContactLink from '../components/Base/ContactLink';
import PageTitle from '../components/Base/PageTitle';

const Farmacia: NextPage = () => {
  return (
    <section className="mt-2 flex">
      <Head>
        <title>Farmacia Don Bosco - OSAP</title>
      </Head>
      <div className="flex flex-col justify-around text-left xl:w-3/5">
        <div className="flex flex-wrap items-center justify-between">
          <PageTitle title="Farmacia Don Bosco" />
          <div className="mb-8 flex items-end gap-2 md:mb-0">
            <Button
              label="Vademecum"
              onClick={() =>
                window.open(
                  'http://www.osapsalud.com.ar/descargar_pdf.php?archivo=wordpress/wp-content/uploads/Vademecum/VADEMECUM_OSAP_WEB.pdf',
                  '_blank'
                )
              }
              trailingIcon={<DownloadSimple weight="bold" />}
              variant="outlined"
            />
            <Button
              label="Pedidos Online"
              trailingIcon={<ShoppingCart weight="bold" />}
              onClick={() => window.open('http://190.228.161.158/farma2', '_blank')}
            />
            <a
              href="http://www.osapsalud.com.ar/wordpress/wp-content/uploads/2020/04/PedidosWEB.jpg"
              className="text-xs text-blue-700 underline hover:text-blue-500"
              target="_blank"
            >
              <Question className="rounded-full bg-blue-400 text-blue-100" size={24} alt="Ver instrucciones" />
              Instrucciones
            </a>
          </div>
        </div>
        <article className="mb-6  text-left text-lg">
          <div>
            <p>
              La Farmacia Don Bosco OSAP le brinda al beneficiario descuentos mayores en medicamentos comprendidos
              dentro de la resolución Nº 310 (medicamentos crónicos prevalentes) y la posibilidad de obtener
              prestaciones como:
            </p>
            <ul className="mt-2 list-inside list-disc">
              <li>Insumos de internación </li>
              <li>Elementos de ostomía sin costo </li>
            </ul>
          </div>
          <div className="mt-8 grid gap-y-2 gap-x-0.5 lg:grid-cols-2">
            <span className="flex items-center gap-2 text-lg">
              <ContactLink
                target="_blank"
                href="https://goo.gl/maps/1CTys4LYJ7BK7a8i8"
                variant="black"
                label="San José 449 - San Nicolás de los Arroyos"
                icon={<MapPin weight="duotone" size="1.3em" className="text-orange-500" />}
              />
            </span>
            <span className="flex items-center gap-2 text-lg">
              <Clock weight="duotone" size="1.3em" className="text-orange-500" /> Lunes a viernes de 8:00hs a 16:00hs
            </span>
            <span className="flex items-center gap-2 text-lg">
              <ContactLink
                href="tel:3364427042"
                label="(336)4427042"
                variant="blue"
                icon={<Phone weight="duotone" size="1.3em" />}
              />
              <ContactLink href="tel:3364420700" label="4420700" variant="blue" />
            </span>
            <span className="flex items-center gap-2 text-lg">
              <ContactLink
                href="wa-me:3364008162"
                label="(336)4008162"
                variant="blue"
                icon={<WhatsappLogo weight="duotone" size="1.3em" />}
              />
            </span>
          </div>
        </article>
        <article className=" mt-8 text-left xl:mt-10 2xl:mt-12">
          <h2 className="flex items-center gap-2 font-display text-3xl text-orange-700">
            <Bicycle size="1.1em" /> Envios
          </h2>
          <p className="my-3 text-lg">Por cadeteria a las siguientes localidades:</p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded bg-white py-1 px-2 text-blue-600">San Nicolás</span>
            <span className="rounded bg-white py-1 px-2 text-blue-600">La Emilia</span>
            <span className="rounded bg-white py-1 px-2 text-blue-600">Ramallo y Villa Ramallo</span>
            <span className="flex gap-2 rounded bg-white py-1 px-2 text-blue-600">
              Villa Constitucion y Empalme:
              <ContactLink label="Jose Barretto (3400)444023" href="tel:3400444023" variant="black" />
            </span>
          </div>
        </article>
      </div>
      <img src="./img/pharmacy.svg" alt="" className="hidden w-2/5 p-4 pr-8 xl:block" />
    </section>
  );
};

export default Farmacia;
