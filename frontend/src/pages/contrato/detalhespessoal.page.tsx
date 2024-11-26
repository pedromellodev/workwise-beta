import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, PenSquare } from "lucide-react";
import Info from "../../components/screens/info.screen";
import InfoContratos from "../../components/screens/info.contrato.screen";
import workwise_logo from "../../assets/workwise_logo.svg";
import { Button } from "../../components/ui/button";

// Definição dos itens do menu
const menuItems = [
  { label: "Informações Pessoais", component: Info },
  { label: "Informações Contrato", component: InfoContratos },
  { label: "Banco de Horas", component: null },
  { label: "Avaliações", component: null },
  { label: "Documentos", component: null },
];

const personalInfo = [
  { label: "Nome", value: null },
  { label: "CPF", value: null },
  { label: "RG", value: null },
  { label: "Idade", value: null },
  { label: "Data de Nascimento", value: null },
  { label: "Telefone", value: null },
  { label: "Celular", value: null },
];

const contractInfo = [
  { label: "Contratação", value: null },
  { label: "Cargo", value: null },
  { label: "Supervisor", value: null },
  { label: "Salário", value: null },
  { label: "Horário", value: null },
  { label: "Vigência", value: null },
  { label: "Tempo", value: null },
];

export default function Detalhes() {
  const navigate = useNavigate();
  const { nomeFuncionario } = useParams();
  const nomeFuncionarioString = nomeFuncionario ?? ""; // Nome do funcionário vindo da URL
  const [selectedIndex, setSelectedIndex] = useState(0); // Índice do menu selecionado

  // Renderiza o componente baseado no índice selecionado
  const RenderComponent = menuItems[selectedIndex]?.component;

  return (
    <div className="h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 flex flex-col overflow-hidden">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Editar
              </button>

              {/* Botão Voltar */}
              <button
                onClick={() => navigate("/contratos")} // Navegação para contratos
                className="px-4 py-2 border rounded-md flex items-center gap-2 hover:bg-purple-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Voltar
              </button>
            </div>
          </header>

          {/* Grid Container */}
          <div className="grid grid-cols-[373px,1256px] gap-4 mt-6">
            {/* Coluna 1: Menu */}
            <div className="w-[277px] h-[430px] border border-gray-300 rounded-lg overflow-hidden p-6 ml-[60px]">
              {/* Cabeçalho */}
              <div className="bg-purple-400 text-white font-medium text-center py-4 rounded-md">
                Opções
              </div>

              {/* Itens do menu */}
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)} // Atualiza o estado com o índice do item selecionado
                  className={`w-full text-left font-medium py-3 px-4 rounded-md mt-4 ${selectedIndex === index ? 'bg-purple-200' : 'hover:bg-gray-100'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

                 {/* info pessoais*/}
     <div className="bg-white w-[1000px] h-[600px] border border-gray-300 rounded-md p-6 mb-[50px] overflow-y-auto" 
     style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Pessoais */}
      <div className="mb-8">
        <div className="bg-purple-400 text-center py-2 rounded-md mb-6">
          <h2 className="text-white">Dados Pessoais</h2>
        </div>
        <div className="grid grid-cols-[200px,1fr,auto] gap-6 items-start">
          <div className="space-y-4">
            {[
              "Nome",
              "CPF",
              "RG",
              "Idade",
              "Data de Nascimento",
              "Telefone",
              "Celular"
            ].map((label) => (
              <div key={label} className="border rounded-md p-2 text-center">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Residencial */}
      <div className="mb-8">
        <div className="bg-purple-400 text-center py-2 rounded-md mb-6">
          <h2 className="text-white">Dados Residencial</h2>
        </div>
        <div className="grid grid-cols-[200px,1fr,auto] gap-6 items-start">
          <div className="space-y-4">
            {[
              "CEP",
              "Rua",
              "Número",
              "Bairro",
              "Distrito",
              "Complemento",
            ].map((label) => (
              <div key={label} className="border rounded-md p-2 text-center">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Escolar */}
      <div className="mb-8">
        <div className="bg-purple-400 text-center py-2 rounded-md mb-6">
          <h2 className="text-white">Dados Escolaridade</h2>
        </div>
        <div className="grid grid-cols-[200px,1fr,auto] gap-6 items-start">
          <div className="space-y-4">
            {[
              "Escola",
              "CNPJ",
              "CEP",
              "Endereço",
              "Telefone",
              "Cursando",
              "Ano/Semestre",
              "Termino"
            ].map((label) => (
              <div key={label} className="border rounded-md p-2 text-center">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banco */}
      <div className="mb-8">
        <div className="bg-purple-400 text-center py-2 rounded-md mb-6">
          <h2 className="text-white">Dados Bancários</h2>
        </div>
        <div className="grid grid-cols-[200px,1fr,auto] gap-6 items-start">
          <div className="space-y-4">
            {[
              "Banco",
              "Agência",
              "Conta",
              "Tipo"
            ].map((label) => (
              <div key={label} className="border rounded-md p-2 text-center">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* info contrato */}
      {/* banco horas */}
      {/* avaliacoes */}
      {/* documentos */}




              {/* Renderiza o componente correspondente ao menu selecionado */}
              {RenderComponent ? <RenderComponent /> : <div className="text-center text-gray-500">Selecione uma opção do menu.</div>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
