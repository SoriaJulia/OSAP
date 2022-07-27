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
            className={`tab-button
          ${
            selectedTab === tab.index
              ? ' border-b-2  border-orange-600 border-b-white bg-white font-semibold'
              : 'mb-0 bg-white/50'
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
            <tab.Icon weight={selectedTab === tab.index ? 'bold' : 'light'} size="1.2em" />
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="tab-panel" aria-labelledby={`btn-${selectedTab}`} id={`tabpanel-${selectedTab}`}>
        {Panel && <Panel.Component index={selectedTab} payload={payload} />}
      </div>
    </div>
  );
};
export default Tabs;
