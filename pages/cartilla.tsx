import { Especialidad } from '@appTypes/especialidad';
import { ServiceResponse } from '@appTypes/gecros';
import { Localidad } from '@appTypes/localidad';
import { getEspecialidades } from '@services/cartilla';
import PageTitle from 'components/Base/PageTitle';
import ProfesionalesTab from 'components/Cartilla/ProfesionalesTab';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

type CartillaProps = {
  localidades: Localidad[];
  especialidadesResult: ServiceResponse<Especialidad[]>;
};

const Cartilla: NextPage<CartillaProps> = ({ localidades, especialidadesResult }) => {
  if (especialidadesResult.message) console.log(especialidadesResult.message);
  return (
    <div className="">
      <Head>
        <title>Cartilla - OSAP</title>
      </Head>
      <PageTitle title="Cartilla médica" />
      <ProfesionalesTab especialidades={especialidadesResult.data} localidades={localidades} />
    </div>
  );
};

export default Cartilla;
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const especialidadesResult = await getEspecialidades();
  return {
    props: { especialidadesResult },
  };
};
