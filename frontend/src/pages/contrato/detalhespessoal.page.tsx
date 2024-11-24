import workwise_logo from "../../assets/workwise_logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Detalhes() {
  const navigate = useNavigate();

  // Estado para armazenar a informação que será exibida no quadro
  const [selectedOption, setSelectedOption] = useState("Informações Pessoais");

  // Função para atualizar a opção selecionada
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 overflow-hidden flex flex-col items-center">
      {/* Header com logo */}
      <div className="w-full p-1 flex justify-between items-center bg-purple-300">
        <div className="relative">
          {/* Logo como botão do menu */}
          <input type="checkbox" id="menu" className="hidden peer" />
          <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex justify-center items-center min-h-screen w-full">
        <div className="h-[731px] w-[1256px] bg-white/95 backdrop-blur-sm shadow-lg rounded-lg">
          {/* Header com fundo roxo */}
          <header className="bg-purple-500 text-white p-4 rounded-t-lg mb-12">
            <div className="p-4 flex justify-between">
              {/* Botão Editar */}
              <button className="px-4 py-2 border rounded-md flex items-center gap-2 hover:bg-gray-100">
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
                className="px-4 py-2 border rounded-md flex items-center gap-2 hover:bg-gray-100"
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

       {/* Sidebar Navigation com borda e bordas arredondadas */}
       <aside className="w-64 border border-gray-400 p-4 rounded-lg">
            <nav className="flex flex-col gap-4">
              {[
                { name: "Opções", isHeader: true },
                { name: "Informações Pessoais", isActive: selectedOption === "Informações Pessoais" },
                { name: "Informações Contrato", isActive: selectedOption === "Informações Contrato" },
                { name: "Banco de Horas", isActive: selectedOption === "Banco de Horas" },
                { name: "Avaliações", isActive: selectedOption === "Avaliações" },
                { name: "Documentos", isActive: selectedOption === "Documentos" },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`p-4 text-left w-full ${
                    item.isHeader
                      ? "bg-purple-500 text-white rounded-t-lg"
                      : item.isActive
                      ? "bg-purple-100"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleOptionClick(item.name)} // Altera o conteúdo com base na opção clicada
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </aside>

          {/* Exibição do conteúdo de acordo com a opção selecionada */}
          <div className="flex-1 p-8 bg-gray-100 rounded-lg mt-4 ml-8">
            <h2 className="text-2xl font-semibold mb-4">{selectedOption}</h2>
            <p>
              {selectedOption === "Informações Pessoais" && "Aqui estão as informações pessoais."}
              {selectedOption === "Informações Contrato" && "Aqui estão as informações do contrato."}
              {selectedOption === "Banco de Horas" && "Aqui estão as informações sobre o banco de horas."}
              {selectedOption === "Avaliações" && "Aqui estão as avaliações."}
              {selectedOption === "Documentos" && "Aqui estão os documentos."}
            </p>
          </div>

        </div>
      </main>

    </div>
  );
}
