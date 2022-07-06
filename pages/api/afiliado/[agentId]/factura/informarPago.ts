import { transporter } from '@lib/mailer';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { IncomingForm } from 'formidable';
import { readFileSync } from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  const fData = await new Promise<{ fields: any; files: any }>((resolve, reject) => {
    const form = new IncomingForm({
      multiples: false,
    });
    form.parse(req, (err, fields, files) => {
      if (err) console.log(err);
      resolve({ fields, files });
    });
  });

  const file = fData.files?.comprobante;
  const fileContent = readFileSync(file.filepath);
  const mailData = {
    from: 'contacto@osap.com.ar',
    to: 'soriajulias@gmail.com',
    subject: `Informe de pago - ${session?.user?.name} `,
    html: `
    <p>Agente: ${session?.user?.agentId}, DNI: ${session?.user?.name}</p>
    <p>Facturas: ${fData.fields.facturas}</p>
    <p>Importe: ${fData.fields.importe}</p>`,
    attachments: [{ filename: file.originalFilename, content: fileContent }],
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
      res.status(200).json({ message: 'error al enviar la info' });
    } else {
      console.log(info);
      res.status(200).json({ message: 'success' });
    }
  });

  res.status(200);
}
