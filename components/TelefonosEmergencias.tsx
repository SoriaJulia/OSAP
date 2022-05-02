import React from 'react';
import { Phone } from 'phosphor-react';
import ContactLink from './Base/ContactLink';

// TODO implement getStaticProps

const places = [
  {
    name: 'San Nicolás',
    phones: [
      {
        label: '(0336) 4423672',
        href: 'tel:+543364423672',
      },
      {
        label: '4429752',
        href: 'tel:+543364429752',
      },
      {
        label: '4430143',
        href: 'tel:+543364430143',
      },
      {
        label: '4430300',
        href: 'tel:+543364430300',
      },
    ],
  },
  {
    name: 'Buenos Aires',
    phones: [
      {
        label: '(011) 45562000',
        href: 'tel:+5401145562000',
      },
      {
        label: '40008888',
        href: 'tel:+5401140008888',
      },
      {
        label: '0810 333 8888',
        href: 'tel:08103338888',
      },
    ],
  },
  {
    name: 'Rosario',
    phones: [
      {
        label: '0810 222 7510',
        href: 'tel:08102227510',
      },
    ],
  },
  {
    name: 'Villa Constitución',
    phones: [
      {
        label: '(03400) 476476',
        href: 'tel:+5403400476476',
      },
      {
        label: '477333',
        href: 'tel:+5403400477333',
      },
    ],
  },
  {
    name: 'Arroyo Seco',
    phones: [
      {
        label: '(03402) 427400',
        href: 'tel:+5403402427400',
      },
    ],
  },
  {
    name: 'Ramallo',
    phones: [
      {
        label: '0800 555 5200',
        href: 'tel:08005555200',
      },
    ],
  },
];

const TelefonosEmergencias = () => {
  return (
    <article className="flex flex-col rounded bg-white p-4">
      <h2 className="mb-4 font-display text-5xl text-orange-600">Emergencias</h2>
      {places.map((place) => {
        return (
          <div key={place.name} className="flex flex-wrap items-center gap-2 px-4 py-2">
            {place.name}
            <Phone className="text-orange-500" weight="duotone" size={24} />
            {place.phones.map((phone) => {
              return <ContactLink href={phone.href} variant="blue" label={phone.label} key={phone.href} />;
            })}
          </div>
        );
      })}
    </article>
  );
};

export default TelefonosEmergencias;
