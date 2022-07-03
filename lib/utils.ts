import { InputChangeHandler } from '@appTypes/reactCommon';
import { NEXT_URL } from 'config';
import { XMLParser } from 'fast-xml-parser';
import _ from 'lodash';
import { GCROSSBaseResponse } from '@appTypes/grcoss';
import { NETWORK_ERROR } from './constants';

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

export const parseSOAPResponse = <T extends GCROSSBaseResponse>(
  actionName: string,
  resultName: string,
  xml: string
): T => {
  // TODO better types for xml parser
  const parser = new XMLParser();
  const jsonObj = parser.parse(xml);
  const result = jsonObj?.['soap:Envelope']?.['soap:Body']?.[`${actionName}Response`]?.[`${actionName}Result`];
  if (!result) {
    throw new Error(`Malformed XML for ${actionName}\n ${xml}`);
  }
  const resultObj = parser.parse(result);
  const finalObj = resultObj?.DocumentElement?.[resultName];
  if (!finalObj) {
    throw new Error(`Malformed XML for ${resultName}\n ${xml}`);
  }
  return finalObj;
};

export const parseJSONResponse = (actionName: string, xml: string) => {
  const parser = new XMLParser();
  const jsonObj = parser.parse(xml);
  const result = jsonObj?.['s:Envelope']?.['s:Body']?.[`${actionName}Response`]?.[`${actionName}Result`];
  if (!result) {
    throw new Error(`Malformed XML for ${actionName}\n ${xml}`);
  }
  return JSON.parse(result);
};

export const nextFetch = async (url: string, options?: RequestInit) => {
  try {
    const result = await fetch(`${NEXT_URL}/${url}`, options);

    if (result.ok) {
      const data = await result.json();
      return { data, error: null };
    }
    return { data: undefined, error: result.statusText };
  } catch (err) {
    console.error(err);
    return { data: undefined, error: NETWORK_ERROR };
  }
};

export const changeTextInput =
  (setterFn: React.Dispatch<React.SetStateAction<string>>): InputChangeHandler =>
  (e) => {
    setterFn(e.target.value);
  };

export const changeNumberInput =
  (setterFn: React.Dispatch<React.SetStateAction<number | ''>>): InputChangeHandler =>
  (e) => {
    setterFn(parseInt(e.target.value, 10));
  };

export const changeFileInput =
  (setterFn: React.Dispatch<React.SetStateAction<Array<File>>>): InputChangeHandler =>
  (e) => {
    const files = e.target.files && Array.from(e.target.files);
    setterFn(files || []);
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
