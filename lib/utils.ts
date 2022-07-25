import { InputChangeHandler } from '@appTypes/reactCommon';
import { NEXT_URL } from 'config';
import { X2jOptionsOptional, XMLParser } from 'fast-xml-parser';
import _ from 'lodash';
import { GECROSBaseResponse } from '@appTypes/gecros';
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

export type ParseSOAPOptions = {
  actionName: string;
  resultName: string;
  rootResultName?: string;
  parserOptions?: X2jOptionsOptional;
};

/**
 * @description Parses GECROS service from SOAP/XML format to JSON.
 * @param {string} xml xml text with service response. It contains another XML string with the actual data.
 * @param {ParseSOAPOptions} options
 * @param {string} options.actionName - Required.
 * XML response always contains actionName + Response, and actionName + Result
 * @param {string} options.rootResultName - Optional. Most responses use DocumentElement as the rootResultName
 * @param {string} options.resultName - Optional.
 * Index on service response object which contains an entry for the data and 'Mensaje'
 * IMPORTANT: this option must be the empty string for some enpoints where the node for the resultName is missing
 */
export const parseSOAPResponse = <T extends GECROSBaseResponse>(
  xml: string,
  { actionName, resultName, rootResultName = 'DocumentElement' }: ParseSOAPOptions
): T => {
  // TODO better types for xml parser
  const parser = new XMLParser();
  const jsonObj = parser.parse(xml);
  const result = jsonObj?.['soap:Envelope']?.['soap:Body']?.[`${actionName}Response`]?.[`${actionName}Result`];
  if (!result) {
    throw new Error(`Malformed XML for ${actionName}\n ${xml}`);
  }
  const resultObj = parser.parse(result);
  const finalObj = resultObj?.[rootResultName]?.[resultName] || resultObj?.[rootResultName];
  // if (!finalObj) {
  //   throw new Error(`Malformed XML for ${resultName}\n ${xml}`);

  // }
  return finalObj;
};

export type OSAPResponse<T> = {
  [k: string]: T[];
};

export const parseJSONResponse = <T>(xml: string, { actionName }: { actionName: string }): OSAPResponse<T> => {
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
