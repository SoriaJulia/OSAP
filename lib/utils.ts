import { InputChangeHandler } from '@appTypes/reactCommon';
import { NEXT_URL } from 'config';
import { XMLParser, XMLValidator } from 'fast-xml-parser';
import _ from 'lodash';

export function jsonResponse(status: number, data: any, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    ...init,
    status,
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json',
    },
  });
}
export type ParseSOAPOptions = {
  actionName: string;
  resultName: string;
  rootResultName?: string;
};
export const parseSOAPResponse = (xml: string, options: ParseSOAPOptions) => {
  const { actionName, resultName, rootResultName } = options;
  if (XMLValidator.validate(xml)) {
    const parser = new XMLParser();
    const jsonObj = parser.parse(xml);
    const result = jsonObj['soap:Envelope']['soap:Body'][`${actionName}Response`][`${actionName}Result`];
    const resultObj = parser.parse(result);
    return resultObj[rootResultName || 'DocumentElement'][resultName];
  }
};

export const parseJSONResponse = (actionName: string, xml: string) => {
  if (XMLValidator.validate(xml)) {
    const parser = new XMLParser();
    const jsonObj = parser.parse(xml);
    const result = jsonObj['s:Envelope']['s:Body'][`${actionName}Response`][`${actionName}Result`];
    return JSON.parse(result);
  }
};

export const nextFetch = async (url: string, options?: RequestInit) => {
  const result = await fetch(`${NEXT_URL}/${url}`, options);
  const data = await result.json();
  return data;
};

export const changeTextInput =
  (setterFn: React.Dispatch<React.SetStateAction<string>>): InputChangeHandler =>
  (e) => {
    setterFn(e.target.value);
  };

export const changeNumberInput =
  (setterFn: React.Dispatch<React.SetStateAction<number>>): InputChangeHandler =>
  (e) => {
    setterFn(parseInt(e.target.value, 10));
  };

export const downloadBase64File = (contentType: string, base64Data: string, fileName: string) => {
  const linkSource = `data:${contentType};base64,${base64Data}`;
  const downloadLink = document.createElement('a');
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};

export const capitalizeText = (text: string) => {
  return _.words(text)
    .map((word) => {
      return _.capitalize(word);
    })
    .join(' ');
};

export const currentYear = new Date().getFullYear();
