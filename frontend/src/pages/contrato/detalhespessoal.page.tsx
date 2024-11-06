  import { useParams } from "react-router-dom";
  import { ButtonGroup } from "../../components/ui/buttonGroup";
  import { useState } from "react";
  import { ChevronLeft, Edit } from "lucide-react";
  import Info from "../../components/screens/info.screen";
  import InfoContratos from "../../components/screens/info.contrato.screen";
  import { DividerHorizontal } from "../../components/ui/divider";
  import workwise_logo from "../../assets/workwise_logo.svg";
  import { useNavigate } from "react-router-dom";

  // Definição de menuItems
  const menuItems = [
    "Informações Pessoais",
    "Informações Contrato",
    "Banco de Horas",
    "Avaliações",
    "Documentos",
  ];

  export function Detalhes() {

    const navigate = useNavigate();

    const handleLogout = () => {
      navigate("/contratos");
    };
    
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
      <div className="min-h-screen bg-gradient-to-b from-purple-600 to-blue-400 flex flex-col">
        <div className="w-full p-3 flex justify-between items-center bg-purple-400">
          <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
        </div>


        <main className="flex-1 px-[92px] py-12">
          <div className="bg-white border border-[#3f3f3f] flex flex-col h-full">
            <div className="px-12 py-5 bg-purple-400 border-b border-[#3f3f3f] flex justify-between items-start">
              <button className="px-[39px] py-[17px] bg-white rounded border border-roxo:primario flex items-center gap-2">
                <Edit className="w-6 h-6" />
                <span className="text-[#1f1f1f] text-xl font-normal font-['Alata']">Editar</span>
              </button>
              <button 
                  className="px-6 py-3 bg-white rounded-lg border border-gray-800 flex items-center gap-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  onClick={() => navigate("/contratos")}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                  <span className="text-gray-800 text-xl font-normal">Voltar</span>
              </button>
            </div>

            <div className="flex flex-1">
              <aside className="w-[373px] p-12 border-r border-[#3f3f0000]">
                <DividerHorizontal/>
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
      </div>
    );
  }
