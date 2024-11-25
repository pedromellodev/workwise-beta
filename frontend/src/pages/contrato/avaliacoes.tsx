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

export default function Avaliacoes() {
  const navigate = useNavigate();
  const { nomeFuncionario } = useParams();
  const nomeFuncionarioString = nomeFuncionario ?? ""; // Nome do funcionário vindo da URL
  const [selectedIndex, setSelectedIndex] = useState(0); // Índice do menu selecionado

  // Renderiza o componente baseado no índice selecionado
  const RenderComponent = menuItems[selectedIndex]?.component;

  return (
    <div className="h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 flex flex-col  overflow-hidden">
      {/* Header */}
      <div className="w-full p-3 flex justify-between items-center bg-purple-400">
        <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
      </div>
        
        {/* Main Content */}
<main className="container mx-auto p-3">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    {/* Action Buttons */}
    <div className="p-2 bg-purple-100 flex justify-between items-center">
      <Button variant="outline" className="flex items-center gap-2">
        <PenSquare className="h-4 w-4" />
        Editar
      </Button>
      <Button
        variant="ghost"
        className="flex items-center gap-2"
        onClick={() => navigate("/contratos")}
      >
        <ChevronLeft className="h-5 w-5" />
        Voltar
      </Button>
    </div>

    {/* Grid Container */}
    <div className="grid grid-cols-[373px,1256px] gap-4 mt-6">
      {/* Coluna 1: Menu */}
      <div className="bg-white border border-gray-300 rounded-md p-6">
        {/* Cabeçalho */}
        <div className="bg-purple-400 text-white font-medium text-center py-4 rounded-md">
          Opções
        </div>

        {/* Itens do menu */}
        <button className="w-full text-left font-medium py-3 px-4 hover:bg-gray-100 rounded-md mt-4" >
          Informações Pessoais
        </button>
        <button className="w-full text-left font-medium py-3 px-4 hover:bg-gray-100 rounded-md mt-4">
          Informações Contrato
        </button>
        <button className="w-full text-left font-medium py-3 px-4 hover:bg-gray-100 rounded-md mt-4">
          Banco de Horas
        </button>
        <button className="w-full text-left font-medium py-3 px-4 bg-purple-200 rounded-md mt-4">
          Avaliações
        </button>
        <button className="w-full text-left font-medium py-3 px-4 hover:bg-gray-100 rounded-md mt-4">
          Documentos
        </button>
      </div>

      {/* Coluna 2: Conteúdo */}
      <div className="bg-white border border-gray-300 rounded-md p-6">
        <h2 className="text-xl font-bold mb-4">Avaliações</h2>
        <p>
          Aqui você pode exibir informações detalhadas sobre o contrato, como
          informações do cliente, histórico e muito mais.
        </p>
      </div>
    </div>
  </div>
</main>


    </div>
  );
}
