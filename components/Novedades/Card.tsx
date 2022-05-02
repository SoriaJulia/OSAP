import Image from 'next/image';
import React, { useState } from 'react';
import { ArrowsOutSimple, ShareNetwork } from 'phosphor-react';
import imagen from '../../public/img/Novedad.jpg';
import Button from '../Base/Button';
import ModalNovedad from './Modal';
import Portal from '../Layout/Portal';

type CardNovedadType = {
  display: string;
};
const CardNovedad: React.FC<CardNovedadType> = ({ display }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => () => {
    setShowModal(true);
  };

  return (
    <div
      className={`${
        display === 'extended' ? 'flex-row-reverse' : 'flex-col'
      }  z-0 flex rounded bg-white shadow-grey-300 drop-shadow`}
    >
      <Image className="rounded object-cover" src={imagen} height={800} width={2300} />
      <div className={`${display === 'extended' ? 'px-14 py-10' : 'p-4'} `}>
        <h3 className={`${display === 'extended' ? 'mb-6 text-4xl' : 'mb-3 text-2xl'} font-display  text-blue-700`}>
          Plan Adherentes aumento de cuota
        </h3>
        <p className="text-left">
          Con base en la resolución 2022-459-APN-MS del Ministerio de Salud, publicada el 26 de Febrero de 2022 en el
          boletín Oficial de la República Argentina, OSAP informa un incremento de SEIS POR CIENTO (6%) a partir del 1º
          de Marzo de 2022, y SEIS POR CIENTO (6%) a partir del 1º de Abril de 2022.
        </p>
      </div>
      {display === 'extended' ? (
        <div className="absolute bottom-4 right-2/4">
          <Button label="Conocé más" onClick={handleClick()} />
        </div>
      ) : (
        <div className="flex justify-end gap-2 border-t border-gray-100 pr-2 text-orange-500">
          <button onClick={handleClick()} className="py-4 px-2 hover:text-yellow-600">
            <ArrowsOutSimple size={24} />
          </button>
          <button onClick={handleClick()} className="px-2 py-4 hover:text-yellow-600">
            <ShareNetwork size={24} />
          </button>
        </div>
      )}
      <Portal>
        <ModalNovedad
          show={showModal}
          onDismiss={() => {
            setShowModal(false);
          }}
          title="Plan Adherentes aumento de cuota"
          text={
            <div>
              <p>San Nicolás, 1 de Marzo de 2022.</p>
              <p>Estimado beneficiario:</p>
              <p>
                <strong>Planes Adherentes OSAP:</strong>
              </p>
              <p>
                Con base en la resolución 2022-459-APN-MS del Ministerio de Salud, publicada el 26 de Febrero &nbsp;de
                2022 en el boletín Oficial de la República Argentina, OSAP informa un incremento de{' '}
                <strong>SEIS POR CIENTO</strong>{' '}
                <strong>
                  &nbsp;(6%) a partir del 1º de Marzo de 2022, y SEIS POR CIENTO (6%) a partir del 1º de Abril de 2022
                </strong>
                .
              </p>
              <p>
                Para su información, adjuntamos el Artículo 1° de la Resolución, publicada en el Boletín Oficial del
                26/2/2022.
              </p>
              <p>
                <strong>LA MINISTRA DE SALUD</strong>
              </p>
              <p>
                <strong>RESUELVE:</strong>
              </p>
              <p>
                <em>
                  ARTÍCULO 1°.- Autorízanse a todas las Entidades de Medicina Prepaga inscriptas en el Registro Nacional
                  de
                </em>
              </p>
              <p>
                <em>
                  Entidades de Medicina Prepaga (RNEMP) aumentos generales, complementarios y acumulativos de aquel que
                  ha
                </em>
              </p>
              <p>
                <em>
                  sido aprobado para el mes de enero de 2022 mediante la Resolución Nº 2125/21 del MINISTERIO DE SALUD,
                  de
                </em>
              </p>
              <p>
                <em>
                  hasta un SEIS POR CIENTO (6%) a partir del 1º de marzo de 2022 y de hasta un SEIS POR CIENTO (6%) a
                  partir
                </em>
              </p>
              <p>
                <em>del 1º de abril de 2022.</em>
              </p>
              <p>Atentamente,</p>
              <p>&nbsp;</p>
              <p>DIRECTORIO OSAP.</p>
            </div>
          }
          image="/img/Novedad.jpg"
          alt="Periodicos"
        />
      </Portal>
    </div>
  );
};

export default CardNovedad;
