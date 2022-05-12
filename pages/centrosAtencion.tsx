import { NextPage } from 'next';
import React from 'react';
import { MapPin, Phone, WhatsappLogo } from 'phosphor-react';
import Head from 'next/head';
import ContactLink from '../components/Base/ContactLink';
import PageTitle from '../components/Base/PageTitle';
import CentroAtencion from '../components/CentroAtencion';
// {
//     title: '',
//     address: { href: '', label: '' },
//     phones: [
//       { href: '', label: '' },
//       { href: '', label: '' },
//     ],
//     wsp: [{ href: '', label: '' }],
//   },
const listCentros = [
  {
    title: 'Sede Central',
    address: { href: 'https://goo.gl/maps/q5kNyRQML5KfYiam8', label: 'Moreno 187 (San Nicolás)' },
    phones: [
      { href: 'tel:03364425632', label: '0336)4425632' },
      { href: 'tel:03364429692', label: '4429692' },
      { href: 'tel:03364450440', label: '4450440' },
      { href: 'tel:03364450099', label: '4450099' },
    ],
    wsp: [{ href: 'wa-me:+5491154529960', label: '+54 9 11 5452-9960' }],
  },
  {
    title: 'Centro de Medicina Preventiva OSAP',
    address: { href: '', label: 'Maipú 36 (San Nicolás)' },
    phones: [
      { href: 'tel:03364450966', label: '(0336)4450966' },
      { href: 'tel:03364450977', label: '4450977' },
    ],
  },
  {
    title: 'Centro Atención Planta Haedo',
    address: { href: '', label: 'Valentín Gómez 210 (Haedo)' },
    phones: [{ href: 'tel:01144896910', label: '011-4489-6910' }],
  },
  {
    title: 'Centro Atención Planta Gral. Savio',
    address: { href: '', label: 'Administración SIDERAR PTA. Gral. Savio (Ramallo)' },
    phones: [
      { href: 'tel:0336-4438960', label: '0336-4438960' },
      { href: '', label: '' },
    ],
    wsp: [{ href: '', label: '' }],
  },
  {
    title: 'Centro Atención Rosario',
    address: { href: '', label: 'Córdoba 1147 Piso 4 Of. 10 (Rosario)' },
    phones: [
      { href: '', label: '0341-4112698' },
      { href: '', label: '4110482 ' },
    ],
    wsp: [{ href: '', label: '+54 9 11 4998-3336' }],
  },
  {
    title: 'Centro Atención Buenos Aires',
    address: { href: '', label: 'Santa Fe 1780. Piso 9 Of. 904 (CABA)' },
    phones: [
      { href: 'tel:01148158477', label: '(011)48158477' },
      { href: '', label: '' },
    ],
  },
  {
    title: 'Centro Atención Ensenada',
    address: { href: '', label: 'Administración-SIDERAR PTA. (Ensenada)' },
    phones: [
      { href: 'tel:02214296187', label: '(0221)4296187' },
      { href: '', label: '' },
    ],
    wsp: [{ href: '', label: '' }],
  },
  {
    title: 'Centro Atención Florencio Varela',
    address: { href: '', label: 'Administración-SIDERAR PTA. (Fcio. Varela)' },
    phones: [
      { href: 'tel:01142296502', label: '(011)42296502' },
      { href: '', label: '' },
    ],
    wsp: [{ href: '', label: '' }],
  },
  {
    title: 'Farmacia Don Bosco OSAP',
    address: { href: '', label: 'Savio y San José (San Nicolás)' },
    phones: [
      { href: 'tel:03364427042', label: '(0336)4427042' },
      { href: 'tel:03334420700', label: '4420700' },
    ],
    wsp: [{ href: '', label: '' }],
  },
  {
    title: 'Farmacia Planta Savio',
    address: { href: '', label: '' },
    phones: [
      { href: 'tel:0336438930', label: '(0336)438930' },
      { href: '', label: '' },
    ],
    wsp: [{ href: 'wa-me:+549336102003', label: '(336)102003' }],
  },
];

const CentrosAtencion: NextPage = () => {
  return (
    <div className="flex">
      <Head>
        <title>Centros de atención - OSAP</title>
      </Head>
      <main className="w-3/5">
        <PageTitle title="Centros de atención" />
        <section className="rounded-sm bg-slate-50 p-4 text-left">
          {listCentros.map((centro) => {
            return (
              <CentroAtencion title={centro.title} address={centro.address} phones={centro.phones} wsps={centro.wsp} />
            );
          })}
        </section>
      </main>
      <img
        className="hidden w-2/5 p-4 pt-16 pr-8 md:block"
        src="./img/undraw_qa_engineers.svg"
        alt="Ilustración de ingeniero mirando una libreta"
      />
    </div>
  );
};

export default CentrosAtencion;
