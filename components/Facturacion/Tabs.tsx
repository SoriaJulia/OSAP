import { Autorizacion } from '@appTypes/autorizacion';
import { Coseguro } from '@appTypes/coseguro';
import { Factura } from '@appTypes/factura';
import { IconProps } from 'phosphor-react';
import React, { FC } from 'react';

export type TabsType = {
  label: string;
  index: number;
  Component: React.FC<any>;
  Icon: React.FC<IconProps>;
  significantProp: 'facturas' | 'coseguros' | 'autorizaciones';
}[];

type TabsProps = {
  tabs: TabsType;
  selectedTab: number;
  onClick: (index: number) => void;
  payload: Array<Factura> | Array<Autorizacion> | Array<Coseguro>;
};

/**
 * Avalible Props
 * @param className string
 * @param tab Array of object
 * @param selectedTab number
 * @param onClick Function to set the active tab
 */
const Tabs: FC<TabsProps> = ({ tabs = [], selectedTab = 0, onClick, payload }) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  return (
    <div className="mt-4 lg:mt-0">
      <div
        role="tablist"
        className="hiddenScrollbar z-10 flex gap-2 overflow-x-scroll md:overflow-x-visible"
        aria-orientation="horizontal"
      >
        {tabs.map((tab) => (
          <button
            className={`-mb-0.5 mt-2 flex items-end gap-1 whitespace-nowrap rounded-t-lg border-x-2 border-t-2 py-2 px-7 text-lg text-orange-600 md:py-4  md:text-xl
          ${
            selectedTab === tab.index ? ' border-b-2  border-orange-600 border-b-white bg-white' : 'mb-0 bg-white/50'
          } `}
            onClick={() => onClick(tab.index)}
            key={tab.index}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
          >
            <tab.Icon weight={selectedTab === tab.index ? 'fill' : 'regular'} size="1.2em" />
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        className="rounded border-2 border-orange-500 bg-white p-3"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
      >
        {Panel && <Panel.Component index={selectedTab} payload={payload} />}
      </div>
    </div>
  );
};
export default Tabs;
