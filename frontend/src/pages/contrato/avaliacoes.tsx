import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, PenSquare } from 'lucide-react';
import workwise_logo from "../../assets/workwise_logo.svg";

// Definição dos itens do menu
const menuItems = [
  { label: "Informações Pessoais", id: "personal" },
  { label: "Informações Contrato", id: "contract" },
  { label: "Banco de Horas", id: "timebank" },
  { label: "Avaliações", id: "evaluations" },
  { label: "Documentos", id: "documents" },
];

const personalInfo = [
  { label: "Nome", value: "Erasmo Cabral" },
  { label: "CPF", value: "xxx.xxx.xxx-xx" },
  { label: "RG", value: "xx.xxx.xxx-xx" },
  { label: "Idade", value: "17 anos" },
  { label: "Data de Nascimento", value: "17/02/2006" },
  { label: "Telefone", value: "xx xxxxx-xx" },
  { label: "Celular", value: "xx xxxxx-xx" },
];
const LocalInfo = [
  { label: "CEP", value: "Erasmo Cabral" },
  { label: "Rua", value: "xxx.xxx.xxx-xx" },
  { label: "Número", value: "xx.xxx.xxx-xx" },
  { label: "Bairro", value: "17 anos" },
  { label: "Distrito", value: "17/02/2006" },
  { label: "Complemento", value: "xx xxxxx-xx" },
];

const EscolaInfo = [
  { label: "Escola", value: "Erasmo Cabral" },
  { label: "CNPJ", value: "xxx.xxx.xxx-xx" },
  { label: "CEP", value: "xx.xxx.xxx-xx" },
  { label: "Endereço", value: "17 anos" },
  { label: "Telefone", value: "17/02/2006" },
  { label: "Cursando", value: "xx xxxxx-xx" },
  { label: "Ano/Semestre", value: "xx xxxxx-xx" },
  { label: "Termino", value: "xx xxxxx-xx" },
];

const ContaInfo = [
  { label: "Banco", value: "Erasmo Cabral" },
  { label: "Agência", value: "xxx.xxx.xxx-xx" },
  { label: "Conta", value: "xx.xxx.xxx-xx" },
  { label: "Tipo", value: "17 anos" },
];

const contractInfo = [
  { label: "Contratação", value: "Estagio não obrigatório" },
  { label: "Cargo", value: "Operador" },
  { label: "Supervisor", value: "José Henrique" },
  { label: "Salário", value: "R$ 700,00" },
  { label: "Horário", value: "08h00 ás 14h00" },
  { label: "Vigência", value: "18/08/2023 á 17/08/2024" },
  { label: "Tempo", value: "167 dias" },
];

export default function Avaliacoes() {
  const navigate = useNavigate();
  const { nomeFuncionario } = useParams();
  const nomeFuncionarioString = nomeFuncionario ?? "";
  const [selectedOption, setSelectedOption] = useState("personal");

  const renderContent = () => {
    switch (selectedOption) {
      case "personal":
        return (
          <div>
          <h2 className="bg-purple-400 text-white text-center py-2 rounded-md mb-6">Dados Pessoais</h2>
          <div className="grid grid-cols-[200px,1fr] gap-4">
            {personalInfo.map((item) => (
              <React.Fragment key={item.label}>
                <div className="border rounded-md p-2 text-center">{item.label}</div>
                <div>{item.value}</div>
              </React.Fragment>
            ))}
          </div>
    
          {/* Dados Residenciais */}
          <h2 className="bg-purple-400 text-white text-center py-2 rounded-md mb-6">Dados Residencial</h2>
          <div className="grid grid-cols-[200px,1fr] gap-4">
            {LocalInfo.map((item) => (
              <React.Fragment key={item.label}>
                <div className="border rounded-md p-2 text-center">{item.label}</div>
                <div>{item.value}</div>
              </React.Fragment>
            ))}
          </div>

          {/* Dados Escolar */}
          <h2 className="bg-purple-400 text-white text-center py-2 rounded-md mb-6">Dados Escolares</h2>
          <div className="grid grid-cols-[200px,1fr] gap-4">
            {EscolaInfo.map((item) => (
              <React.Fragment key={item.label}>
                <div className="border rounded-md p-2 text-center">{item.label}</div>
                <div>{item.value}</div>
              </React.Fragment>
            ))}
          </div>

          {/* Dados Bancarios */}
          <h2 className="bg-purple-400 text-white text-center py-2 rounded-md mb-6">Dados Bancario</h2>
          <div className="grid grid-cols-[200px,1fr] gap-4">
            {ContaInfo.map((item) => (
              <React.Fragment key={item.label}>
                <div className="border rounded-md p-2 text-center">{item.label}</div>
                <div>{item.value}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
        );
      case "contract":
        return (
          <div>
            <h2 className="bg-purple-400 text-white text-center py-2 rounded-md mb-6">Dados Contratuais</h2>
            <div className="mb-8 flex justify-between">
              <div className="space-y-10">
                <div className="border rounded-md p-2 text-center">Data Entrada</div>
                <div className="border-b border-gray-300 w-48"></div>
              </div>
              <div className="space-y-10">
                <div className="border rounded-md p-2 text-center">Data Saída</div>
                <div className="border-b border-gray-300 w-48"></div>
              </div>
            </div>
            <div className="grid grid-cols-[200px,1fr] gap-4">
              {contractInfo.map((item) => (
                <React.Fragment key={item.label}>
                  <div className="border rounded-md p-2 text-center">{item.label}</div>
                  <div>{item.value}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        );
        case "timebank":
          return (
            <div className="space-y-4 mb-8">
            <div className="bg-purple-400 text-center py-2 rounded-md">
              <h2 className="text-white">Registro do Ponto</h2>
            </div>
          </div>
          );
        case "evaluations":
          return (
            <div className="space-y-4 mb-8">
            <div className="bg-purple-400 text-center py-2 rounded-md">
              <h2 className="text-white">Status Avaliações</h2>
            </div>
          </div>
          );
        case "documents":
          return (
            <div className="space-y-4 mb-8">
            <div className="bg-purple-400 text-center py-2 rounded-md">
              <h2 className="text-white">Documentação</h2>
            </div>
          </div>
          );
      default:
        return <div className="text-center text-gray-500">Conteúdo não disponível</div>;
    }
  };

  return (
    <div className="max-h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 flex-1 flex-col overflow-hidden overflow-y-scroll scrollbar-hide">
      {/* Header */}
      <div className="w-full flex justify-between items-center bg-purple-300">
        <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto p-3">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-[42px] my-[48px]">
          {/* Header com fundo roxo */}
          <header className="bg-purple-500 text-white p-4 rounded-t-lg mb-12">
            <div className="p-4 flex justify-between">
              {/* Botão Editar */}
              <button className="px-4 py-2 border rounded-md flex items-center gap-2 hover:bg-purple-400">
                <PenSquare size={16} />
                Editar
              </button>
              {/* Botão Voltar */}
              <button
                onClick={() => navigate("/contratos")}
                className="px-4 py-2 border rounded-md flex items-center gap-2 hover:bg-purple-400"
              >
                <ChevronLeft size={16} />
                Voltar
              </button>
            </div>
          </header>
          
       {/* Grid Container */}
       <div className="grid grid-cols-[373px,750px] max-w-full max-h-full gap-4 mt-6">
            {/* Sidebar */}
            <div className="max-w-full max-h-full border border-gray-300 rounded-lg overflow-hidden p-6 ml-[60px]">
              <aside>
                <div className="bg-purple-400 text-white font-medium text-center py-4 rounded-md mb-4">
                  Opções
                </div>
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedOption(item.id)}
                    className={`w-full text-left font-medium py-3 px-4 rounded-md mt-2 ${
                      selectedOption === item.id ? 'bg-purple-200' : 'hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </aside>
            </div>

            {/* Content Area */}
            <div 
              className="bg-white w-full max-h-[600px] h-full border border-gray-300 rounded-md p-6 mb-[50px] overflow-y-auto" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}