import Image from 'next/image';
import { SignIn } from 'phosphor-react';
import React, { useState } from 'react';
import Button from './Button';
import InputText from './InputText';
import Modal from './Modal';
import loginImg from '../public/img/login.svg';
import { useAuth } from '../context/AuthContext';
import { UserRoles } from '../types/enums';
import { ModalProps } from './Modal';

type LoginModalProps = {
  userRole: UserRoles;
} & ModalProps;

const LoginModal: React.FC<LoginModalProps> = ({ onDismiss, show, title }) => {
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
        <form className="mt-10 mb-2 flex w-full flex-col items-center justify-around px-2 md:w-9/12 md:px-0">
          <div className="flex flex-col">
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
          <div className="m-2 flex justify-end gap-2 place-self-end pt-6 ">
            <Button
              label="Cancelar"
              variant="outlined"
              onClick={(e) => {
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
                setUser({ name: 'admin cliente', role: UserRoles.CLIENTE });
              }}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
