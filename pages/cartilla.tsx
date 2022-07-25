import { Especialidad } from '@appTypes/especialidad';
import { ServiceResponse } from '@appTypes/gecros';
import { Localidad } from '@appTypes/localidad';
import { getEspecialidades } from '@services/cartilla';
import PageTitle from 'components/Base/PageTitle';
import Tabs, { TabsType } from 'components/Cartilla/Tabs';
import PrestadoresTab from 'components/Cartilla/PrestadoresTab';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Plus, UsersThree } from 'phosphor-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import InstitucionesTab from 'components/Cartilla/InstitucionesTab';
import { SanityClient } from '@lib/sanity';
import { Institucion } from '@appTypes/institucion';

const tabs: TabsType = [
  {
    label: 'Prestadores',
    index: 0,
    Component: PrestadoresTab,
    Icon: UsersThree,
    significantProp: 'prestadores',
  },
  {
    label: 'Instituciones',
    index: 1,
    Component: InstitucionesTab,
    Icon: Plus,
    significantProp: 'instituciones',
  },
];

type CartillaProps = {
  localidades: Localidad[];
  especialidadesResult: ServiceResponse<Especialidad[]>;
  instituciones: Institucion[];
};

const Cartilla: NextPage<CartillaProps> = (props) => {
  const { especialidadesResult, localidades, instituciones } = props;
  if (especialidadesResult.message)
    toast.error(especialidadesResult.message, { position: 'bottom-right', duration: 6000 });
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  const tab = tabs[selectedTab];
  const payloads = {
    prestadores: { especialidades: especialidadesResult.data || [], localidades },
    instituciones: { localidades, instituciones },
  };
  return (
    <div className="">
      <Head>
        <title>Cartilla - OSAP</title>
      </Head>
      <PageTitle title="Cartilla médica" />
      <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} payload={payloads[tab.significantProp]} />
    </div>
  );
};

export default Cartilla;
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const especialidadesResult = await getEspecialidades();
  const localidades = [{ todas: '0' }];
  const instituciones = await SanityClient.fetch<Institucion[]>(`*[_type == "institucion"]{
    _id,
    name,
    pageUrl,
    address,
    phone,
    cartillaUrl,
    "fileUrl":file.asset->url
  }`);
  return {
    props: { especialidadesResult, localidades, instituciones },
  };
};
