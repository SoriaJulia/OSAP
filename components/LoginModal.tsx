import Image from 'next/image';
import { SignIn } from 'phosphor-react';
import { useState } from 'react';
import * as React from 'react';
import Router from 'next/router';
import Button from './Base/Button';
import InputText from './Base/InputText';
import Modal, { ModalProps } from './Base/Modal';
import loginImg from '../public/img/login.svg';
import { useAuth } from '../context/AuthContext';
import { UserRoles } from '../types/enums';

type LoginModalProps = {
  userRole: UserRoles;
} & ModalProps;

const LoginModal: React.FC<LoginModalProps> = ({ onDismiss, show, title, userRole }) => {
  const { login, setUser } = useAuth();
  const [user, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // TODO no more anys
  const changeFormValue = (setterFn: any) => (e: any) => {
    setterFn(e.target.value);
  };

  return (
    <Modal onDismiss={onDismiss} show={show} title={title}>
      <div className="flex w-full">
        <div className="hidden md:contents">
          <Image src={loginImg} />
        </div>
        <form className="mt-10 flex w-full flex-col items-center justify-around px-2 md:w-9/12 md:px-0">
          <div className="flex w-10/12 flex-col gap-6">
            <InputText
              type="text"
              label="DNI"
              name="user"
              placeholder="30256544"
              helpText="Sin espacios ni caracteres especiales"
              errorText=""
              value={user}
              onChange={changeFormValue(setUsername)}
            />
            <InputText
              type="password"
              label="Contraseña"
              name="pass"
              placeholder="••••••••"
              helpText="Si no tenes contraseña repetí tu DNI"
              value={password}
              onChange={changeFormValue(setPassword)}
            />
          </div>
          <div className="m-4 flex justify-end gap-2 place-self-end pt-10 md:pt-6 ">
            <Button
              label="Cancelar"
              variant="outlined"
              type="button"
              onClick={() => {
                onDismiss();
              }}
            />
            <Button
              label="Ingresar"
              variant="fill"
              trailingIcon={<SignIn weight="bold" size={20} />}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                // login({ user, password });
                setUser({ name: 'Julia', role: userRole });
                Router.push('/afiliados');
              }}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
