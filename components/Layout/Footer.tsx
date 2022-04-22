import Image from 'next/image';
import { MapPin, Phone, Envelope, Printer } from 'phosphor-react';
import Link from 'next/link';
import logo from '../../public/img/Logo.svg';
import logoSSS from '../../public/img/logo-sss.png';
import logoSSSsmall from '../../public/img/logo-sss-small.png';
import ContactLink from '../Base/ContactLink';

export const Footer = () => {
  return (
    <footer className=" mt-12 flex flex-col gap-9 bg-gradient-to-b from-blue-900 to-grey-700 px-9 py-4 sm:grid md:grid-cols-footer-md lg:grid-cols-footer-lg">
      <div className="hidden md:flex">
        <Image src={logo} />
      </div>

      <ul className="flex flex-col justify-center gap-2 text-blue-200">
        <li className="flex gap-3 align-middle transition hover:text-blue-100 hover:underline">
          <MapPin size={24} /> Av. Moreno 187 San Nicolás Bs As
        </li>
        <li className="flex gap-3 align-middle transition hover:text-blue-100 hover:underline">
          <Phone size={24} />
          0336-4425632/ 4429692/ 4450440/ 4450099
        </li>
        <li className="flex gap-3 align-middle transition hover:text-blue-100 hover:underline">
          <Printer size={24} />
          0336-4437600
        </li>
        <li className="flex gap-3 align-middle transition hover:text-blue-100 hover:underline">
          <Envelope size={24} />
          info@osap.org.ar
        </li>
      </ul>

      <ul className="hidden flex-col justify-center gap-2 text-blue-400 lg:flex">
        <li className="transition hover:text-blue-300 hover:underline">
          <Link href="./contacto">Contactanos</Link>
        </li>
        <li className="transition hover:text-blue-300 hover:underline">
          <Link href="./trabaja">Trabajá con nosotros</Link>
        </li>
        <li className="transition hover:text-blue-300 hover:underline">
          <Link href="./faq">Preguntas frecuentes</Link>
        </li>
        <li className="transition hover:text-blue-300 hover:underline">
          <Link href="./telefonos">Telefonos útiles</Link>
        </li>
        <li className="transition hover:text-blue-300 hover:underline">
          <Link href="./centrosatencion">Centros de atención</Link>
        </li>
      </ul>

      <div className="flex flex-col items-end gap-2">
        <div className="hidden md:flex">
          <Image
            alt="logo super intendencia de servicios de salud"
            src={logoSSS}
            layout="fixed"
          />
        </div>
        <div className="flex md:hidden">
          <Image
            alt="logo super intendencia de servicios de salud"
            src={logoSSSsmall}
          />
        </div>
        <ContactLink
          href="https://goo.gl/maps/pi2u5qHXq1konicFA"
          variant="lightBlue"
          label="Av. Pte. Roque Sáenz Peña
          530 - CABA"
          target="_blank"
          icon={<MapPin size={24} className="shrink-0" />}
        />
        <ContactLink
          href="tel:080022272583"
          label="0800-222-72583 (SALUD)"
          variant="lightBlue"
          icon={<Phone size={24} />}
        />
      </div>
    </footer>
  );
};
