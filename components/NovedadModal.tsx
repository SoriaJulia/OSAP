import Image, { StaticImageData } from 'next/image';
import { Download, ShareNetwork } from 'phosphor-react';
import React, { ReactNode } from 'react';
import Modal, { ModalProps } from './Base/Modal';

type NovedadModalProps = {
  text: ReactNode;
  image?: string;
  alt?: string;
} & ModalProps;

const NovedadModal: React.FC<NovedadModalProps> = ({
  onDismiss,
  show,
  title,
  text,
  image,
  alt,
}) => {
  return (
    <Modal onDismiss={onDismiss} show={show} title={title}>
      <div className="flex max-h-[90vh] flex-col justify-between md:w-[70vw] xl:w-auto 2xl:max-h-[80vh]">
        <div className="mt-6 h-5/6 overflow-y-scroll p-6 text-lg">
          {image && (
            <img
              className=" float-right ml-4 h-1/2 w-1/2 rounded object-cover outline outline-gray-400"
              alt={alt}
              src={image}
            />
          )}

          {text}
        </div>
        <div className="mt-4 flex justify-end gap-2  border-t border-gray-200 pr-2 text-orange-500">
          <button className="px-2 py-5 hover:text-yellow-600">
            <Download size={24} />
          </button>
          <button className=" px-2 py-5 hover:text-yellow-600">
            <ShareNetwork size={24} />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NovedadModal;
