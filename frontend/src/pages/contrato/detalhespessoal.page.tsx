import { useParams } from "react-router-dom";
import { ButtonGroup } from "../../components/ui/buttonGroup";
import { useState } from "react";
import { Bell, ChevronLeft, Edit } from "lucide-react";
import Info from "../../components/screens/info.screen";
import InfoContratos from "../../components/screens/info.contrato.screen";

// Definição de menuItems
const menuItems = [
  "Informações Pessoais",
  "Informações Contrato",
  "Banco de Horas",
  "Avaliações",
  "Documentos",
];

export function Detalhes() {
  const [isSelected, setIsSelected] = useState(0);  // Estado para selecionar as opções
  const { nomeFuncionario } = useParams();
  const nomeFuncionarioString = nomeFuncionario ?? ""; // Nome do funcionário vindo da URL

  // Função para renderizar o componente de acordo com o índice
  type RenderComponentProps = {
    index: number;
  };

  type RenderComponentType = (props: RenderComponentProps) => JSX.Element | null;

  const RenderComponent: RenderComponentType = ({ index }) => {
    switch (index) {
      case 0:
        return <Info nomeFuncionario={nomeFuncionarioString} />;
      case 1:
        return <InfoContratos nomeFuncionario={nomeFuncionarioString} />;
      default:
        return null; // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 flex flex-col">
      <header className="bg-purple-300 px-3.5 py-[18px] flex justify-between items-center">
        <div className="w-[57px] h-[55px]">
          {/* Placeholder para o logo */}
          <div className="w-12 h-[53px] bg-purple-600 rotate-[8.25deg]"></div>
        </div>
        <div className="flex items-center gap-5">
          <Bell className="w-[33px] h-[35px]" />
          <div className="w-[35px] h-[35px] bg-purple-400 rounded-full"></div>
        </div>
      </header>

      <main className="flex-1 px-[92px] py-12">
        <div className="bg-white border border-[#3f3f3f] flex flex-col h-full">
          <div className="px-12 py-5 bg-purple-400 border-b border-[#3f3f3f] flex justify-between items-start">
            <button className="px-[39px] py-[17px] bg-white rounded border border-[#1f1f1f] flex items-center gap-2">
              <Edit className="w-6 h-6" />
              <span className="text-[#1f1f1f] text-xl font-normal font-['Alata']">Editar</span>
            </button>
            <button className="px-[39px] py-[17px] bg-white rounded border border-[#1f1f1f] flex items-center gap-2">
              <ChevronLeft className="w-6 h-6" />
              <span className="text-[#1f1f1f] text-xl font-normal font-['Alata']">Voltar</span>
            </button>
          </div>

          <div className="flex flex-1">
            <aside className="w-[373px] p-12 border-r border-[#3f3f3f]">
              <nav className="flex flex-col">
                <div className="px-[105px] py-4 bg-purple-400 border border-[#3f3f3f] text-center text-[#1f1f1f] text-[19px] font-normal font-['Alata']">
                  Opções
                </div>
                <ButtonGroup
                  buttons={menuItems}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected} // Passa a função para setar a seleção
                />
              </nav>
            </aside>
            <div className="flex-1 px-[50px] pt-[50px] space-y-12">
              <RenderComponent index={isSelected} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
