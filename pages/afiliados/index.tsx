import { NextPage } from 'next';
import { Bank, CreditCard, Receipt, Download } from 'phosphor-react';
import Button from '../../components/Button';
import AfiliadosSectionsNav from '../../components/AfiliadosSectionsNav';

export const Afiliados: NextPage<{ user: any }> = ({ user }) => {
  return (
    <div>
      <div className="flex h-44 w-screen flex-col justify-center gap-4 bg-gradient-to-t from-blue-300/60 to-blue-100/80 text-blue-500">
        <h1 className="text-5xl">¡Hola! Te damos la bienvenida</h1>
        <h2 className="text-2xl">Realiza tus tramites y consultas online</h2>
      </div>
      <AfiliadosSectionsNav />
      <section className="flex flex-col items-center">
        <h3 className="text-3xl text-blue-800">Pagos y facturación</h3>
        <div className="flex justify-center gap-4 pb-4 pt-6">
          <Button
            label="Medios de pago"
            variant="yellowOutlined"
            leadingIcon={<Bank size={24} />}
          />
          <Button
            label="Pago on line"
            variant="yellowOutlined"
            leadingIcon={<CreditCard size={24} />}
          />
          <Button
            label="Informar pago"
            variant="yellowOutlined"
            leadingIcon={<Receipt size={24} />}
          />
        </div>
        <article className="m-2 w-3/4 bg-white py-4 px-6 text-left">
          <h4 className="mb-4 text-grey-400">Ultimas Facturas</h4>
          <table className="w-full table-fixed">
            <thead className="border-b border-blue-300/60 text-blue-500">
              <tr>
                <th className="pb-2">Periodo</th>
                <th>Vencimiento</th>
                <th>Nro de factura</th>
                <th>Estado</th>
                <th>Importe</th>
                <th className="w-20" />
              </tr>
            </thead>
            <tbody className="my-2">
              <tr>
                <td className="py-2">04/2022</td>
                <td>15/05/2022</td>
                <td>2-5244125</td>
                <td>Pendiente</td>
                <td>$34344</td>
                <td className="flex gap-2 py-2 text-blue-400">
                  <Download size={24} />
                  <Receipt size={24} />
                </td>
              </tr>
              <tr className="my-2">
                <td>04/2022</td>
                <td>15/05/2022</td>
                <td>2-5244125</td>
                <td>Pendiente</td>
                <td>$34344</td>
                <td className="flex gap-2 py-2 text-blue-400">
                  <Download size={24} />
                  <Receipt size={24} />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
    </div>
  );
};

export default Afiliados;
