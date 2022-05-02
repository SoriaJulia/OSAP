import Image from 'next/image';
import { MapPin, Phone, Envelope, Printer } from 'phosphor-react';
import Link from 'next/link';
import logo from '../../public/img/Logo.svg';
import logoSSS from '../../public/img/logo-sss.png';
import logoSSSsmall from '../../public/img/logo-sss-small.png';
import ContactLink from '../Base/ContactLink';
import Logo from '../SVG/Logo';

export const Footer = () => {
  return (
    <footer className=" mt-12 flex flex-col items-center gap-9 bg-gradient-to-b from-blue-900 to-grey-700 px-9 py-4 sm:grid sm:grid-cols-footer-md  lg:grid-cols-footer-lg">
      <Logo className="h-16 fill-blue-100 " />
      <div className="flex flex-col justify-center gap-2">
        <ContactLink
          href="https://goo.gl/maps/Sm5zkopMbkXC4ojy5"
          label="Av. Moreno 187 - San Nicolás - BsAs"
          variant="lightBlue"
          target="_blank"
          icon={<MapPin size={24} />}
        />
        <div className="flex flex-wrap gap-2">
          <ContactLink href="tel:3364425632" label="(0336)4425632" variant="lightBlue" icon={<Phone size={24} />} />
          <ContactLink href="tel:3364429692" label="4429692" variant="lightBlue" />
          <ContactLink href="tel:3364450440" label="4450440" variant="lightBlue" />
          <ContactLink href="tel:3364450099" label="4450099" variant="lightBlue" />
        </div>
        <ContactLink href="tel:3364437600" label="(0336)4437600" variant="lightBlue" icon={<Printer size={24} />} />
        <ContactLink
          href="mailto:info@osap.org.ar"
          label="info@osap.org.ar"
          variant="lightBlue"
          icon={<Envelope size={24} />}
        />
      </div>

      <ul className="mt-8 hidden flex-col justify-center gap-2 text-blue-400 md:flex lg:mt-0">
        <li className="transition hover:text-blue-300 hover:underline">
          <Link href="/contacto">Contactanos</Link>
        </li>
        <li className="transition hover:text-blue-300 hover:underline">
          <Link href="/trabaja">Trabajá con nosotros</Link>
        </li>
        <li className="transition hover:text-blue-300 hover:underline">
          <Link href="/faq">Preguntas frecuentes</Link>
        </li>
        <li className="transition hover:text-blue-300 hover:underline">
          <Link href="/telefonos">Telefonos útiles</Link>
        </li>
        <li className="transition hover:text-blue-300 hover:underline">
          <Link href="/centrosatencion">Centros de atención</Link>
        </li>
      </ul>

      <div className="col-span-2 flex flex-col items-end gap-2 md:col-auto">
        <div className="hidden lg:flex">
          <Image alt="logo super intendencia de servicios de salud" src={logoSSS} layout="fixed" />
        </div>
        <div className="flex self-center sm:self-auto lg:hidden">
          <Image alt="logo super intendencia de servicios de salud" src={logoSSSsmall} />
        </div>
        <ContactLink
          href="https://goo.gl/maps/pi2u5qHXq1konicFA"
          variant="lightBlue"
          label="Av. Pte. Roque Sáenz Peña 530 - CABA"
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
