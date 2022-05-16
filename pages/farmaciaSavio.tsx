import { NextPage } from 'next';
import Head from 'next/head';
import { MapPin, Clock, Phone, WhatsappLogo } from 'phosphor-react';
import React from 'react';
import ContactLink from '../components/Base/ContactLink';
import PageTitle from '../components/Base/PageTitle';

const FarmaciaSavio: NextPage = () => {
  return (
    <section className="flex gap-2 text-left ">
      <Head>
        <title>Farmacia Planta Savio - OSAP</title>
      </Head>
      <div>
        <PageTitle title="Farmacia Planta Savio" />
        <article className="flex flex-col gap-3 text-lg lg:mr-12 2xl:mr-20">
          <span className="mb-4 block text-2xl font-thin text-blue-800">
            OSAP tiene la primer farmacia en una Planta Industrial de la Argentina
          </span>
          <p>
            Pueden adquirir medicamentos los afiliados a OSAP, APSOT y los empleados de las empresas contratistas que
            prestan servicios en la Planta.
          </p>
          <p>
            Cuenta con dos bocas de atención, una de ellas por fuera del acceso a planta, lo que permite que los
            afiliados puedan acudir sin necesidad de ingresar a las instalaciones de la Planta.
          </p>
          <div className="mt-4 grid gap-y-3 gap-x-0.5 lg:mt-8 lg:grid-cols-2">
            <span className="flex items-center gap-2 text-lg">
              <ContactLink
                target="_blank"
                href="https://goo.gl/maps/XBo8yrespoj6bQ2VA"
                variant="black"
                label="Planta Gral. Savio - Ramallo"
                icon={<MapPin weight="duotone" size="1.3em" className="text-orange-500" />}
              />
            </span>
            <span className="flex items-center gap-2 text-lg">
              <Clock weight="duotone" size="1.3em" className="text-orange-500" /> Lunes a viernes de 8:00hs a 16:00hs
            </span>
            <span className="flex items-center gap-2 text-lg">
              <ContactLink
                href="tel:3364438930"
                label="(336)4438930"
                variant="blue"
                icon={<Phone weight="duotone" size="1.3em" />}
              />
              <ContactLink href="tel:38930" label="38930 (Interno)" variant="blue" />
            </span>
            <span className="flex items-center gap-2 text-lg">
              <ContactLink
                href="wa-me:3364102003"
                label="(336)4102003"
                variant="blue"
                icon={<WhatsappLogo weight="duotone" size="1.3em" />}
              />
            </span>
          </div>
        </article>
      </div>
      <img src="./img/pharmacy.svg" alt="" className="hidden w-2/5 p-4 pr-8 xl:block" />
    </section>
  );
};

export default FarmaciaSavio;
