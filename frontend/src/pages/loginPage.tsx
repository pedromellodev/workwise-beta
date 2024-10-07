import workwise_logo from "../assets/workwise_logo.svg";
import React from 'react';
import FormsLogin from '../components/func/loginForms';

const Home: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      {/* Sidebar */}
      <div className="absolute top-0 left-0 h-full w-64 p-6 bg-purple-600 text-white flex flex-col justify-center shadow-lg">
        <h5 className="text-lg font-semibold mb-4">Esqueceu a senha?</h5>
        <p className="mb-6">Recupere ela aqui.</p>
        <a
          href="/register"
          className="py-2 px-4 bg-white text-purple-600 rounded-full hover:bg-gray-200 transition duration-300"
        >
          Recuperar Senha
        </a>
      </div>

      {/* Cartão de Login */}
      <div className="w-full max-w-lg p-10 bg-white rounded-lg shadow-md">
        <img src={workwise_logo} alt="Logo" className="w-24 h-24 mx-auto mb-6" />
        <div className="text-center text-xl font-semibold mb-8">Bem-vindo(a)</div>
        <FormsLogin /> {/* Componente de Formulário */}
      </div>
    </div>
  );
};

