import React from 'react';
import { Phone } from 'phosphor-react';
import ContactLink from './Base/ContactLink';

// TODO implement getStaticProps

const places = [
  {
    name: 'OSAP Central',
    phones: [
      {
        label: '(0336) 4425632',
        href: 'tel:+543364425632',
      },
      {
        label: '4429692',
        href: 'tel:+543364429692',
      },
      {
        label: '4450440',
        href: 'tel:+543364450440',
      },
      {
        label: '4450099',
        href: 'tel:+543364450099',
      },
    ],
  },
  {
    name: 'Planta Gral Savio',
    phones: [
      {
        label: '(0336) 4438960',
        href: 'tel:+543364438960',
      },
    ],
  },
  {
    name: 'Planta Haedo',
    phones: [
      {
        label: '(011) 44896910',
        href: 'tel:+5401144896910',
      },
    ],
  },
  {
    name: 'Rosario',
    phones: [
      {
        label: '(0341) 4112698',
        href: 'tel:+5403414112698',
      },
      {
        label: '4110482',
        href: 'tel:+543414110482',
      },
      {
        label: '(011) 49983336',
        href: 'tel:+5401149983336',
      },
    ],
  },
  {
    name: 'Buenos Aires',
    phones: [
      {
        label: '(011) 48158477',
        href: 'tel:+5401148158477',
      },
    ],
  },
  {
    name: 'Ensenada',
    phones: [
      {
        label: '(0221) 4296187',
        href: 'tel:+542214296187',
      },
    ],
  },
  {
    name: 'Florencio Varela',
    phones: [
      {
        label: '(011) 42296502',
        href: 'tel:+5401142296502',
      },
    ],
  },
];

const TelefonosAtencion = () => {
  return (
    <article className="flex flex-col rounded bg-white p-4">
      <h2 className="mb-4 font-display text-5xl text-yellow-500">
        Atención al afiliado
      </h2>
      {places.map((place) => {
        return (
          <div className="flex items-center gap-2 px-4 py-2">
            {place.name}
            <Phone className="text-yellow-500" weight="duotone" size={24} />
            {place.phones.map((phone) => {
              return (
                <ContactLink
                  href={phone.href}
                  variant="blue"
                  label={phone.label}
                />
              );
            })}
          </div>
        );
      })}
    </article>
  );
};

export default TelefonosAtencion;
