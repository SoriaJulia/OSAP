import { Autorizacion, AutXPeriodo } from '@appTypes/autorizacion';
import { Factura, FacXPeriodo } from '@appTypes/factura';
import { capitalizeText } from './utils';

export const formatPeriodo = (periodo: string) => {
  return `${periodo.slice(4)}-${periodo.slice(0, 4)}`;
};

export const getFilteredFacturasXPeriodo = (facturas: Factura[], selectedYear?: number, selectedState = '') => {
  let year = '';
  if (selectedYear) year = selectedYear.toString();

  const filteredFacturas = facturas.filter(
    (factura) => factura.Estado.includes(selectedState) && factura.Peri.slice(0, 4).includes(year)
  );

  const result = filteredFacturas.reduce((facturasxPeriodo: FacXPeriodo, factura) => {
    if (!facturasxPeriodo[factura.Peri]) {
      // eslint-disable-next-line no-param-reassign
      facturasxPeriodo[factura.Peri] = [factura];
    } else {
      facturasxPeriodo[factura.Peri].push(factura);
    }
    return facturasxPeriodo;
  }, {});

  return result;
};

export const getFilteredAutorizacionesXPeriodo = (
  autorizaciones: Autorizacion[],
  selectedYear?: number,
  selectedState = '',
  selectedAfiliado = ''
) => {
  let year = '';
  if (selectedYear) year = selectedYear.toString();

  const filteredAutorizaciones = autorizaciones.filter(
    (autorizacion) =>
      autorizacion.aut_estado.includes(selectedState) &&
      autorizacion.Periodo.slice(0, 4).includes(year) &&
      autorizacion.Afiliado.toLowerCase().includes(selectedAfiliado.toLowerCase())
  );

  const result = filteredAutorizaciones.reduce((autorizacionesxPeriodo: AutXPeriodo, autorizacion) => {
    if (!autorizacionesxPeriodo[autorizacion.Periodo]) {
      // eslint-disable-next-line no-param-reassign
      autorizacionesxPeriodo[autorizacion.Periodo] = [autorizacion];
    } else {
      autorizacionesxPeriodo[autorizacion.Periodo].push(autorizacion);
    }
    return autorizacionesxPeriodo;
  }, {});

  return result;
};

export const getAfiliados = (autorizaciones: Autorizacion[]) => {
  const result = autorizaciones.reduce((afiliados: { [key: string]: string }, autorizacion) => {
    if (!afiliados[autorizacion.Afiliado])
      // eslint-disable-next-line no-param-reassign
      afiliados[autorizacion.Afiliado] = capitalizeText(autorizacion.Afiliado);
    return afiliados;
  }, {});
  return result;
};