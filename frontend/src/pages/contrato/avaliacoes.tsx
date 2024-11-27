import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, PenSquare } from "lucide-react";
import workwise_logo from "../../assets/workwise_logo.svg";
import { Button } from "../../components/ui/button";

export function Avaliacoes() {
	const navigate = useNavigate();
	const { nomeFuncionario } = useParams();
	const nomeFuncionarioString = nomeFuncionario ?? "";
	const [selectedOption, setSelectedOption] = useState("personal");

	return (
		<div className="h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 flex flex-col">
		{/* Header */}
		<div className="w-full flex justify-between items-center bg-purple-300">
			<img src={workwise_logo} alt="WorkWise Logo" className="h-12" /> 
		</div>

		{/* Main Content */}
		<main
			className="container mx-auto p-3 overflow-y-auto h-screen scrollbar-hidden"
			style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
		>
			<div className="bg-white rounded-lg shadow-lg overflow-hidden mx-[42px] my-[48px]">
				{/* Header com fundo roxo */}
				<header className="bg-purple-500 text-white p-4 rounded-t-lg mb-12">
					<div className="p-4 flex justify-between">
						{/* Botão Editar */}
						<button
							type="button"
							className="px-4 py-2 border rounded-md flex items-center gap-2 hover:bg-purple-400"
						>
							<PenSquare size={16} />
							Editar
						</button>
						{/* Botão Voltar */}
						<button
							type="button"
							onClick={() => navigate("/home")}
							className="px-4 py-2 border rounded-md flex items-center gap-2 hover:bg-purple-400"
						>
							<ChevronLeft size={16} />
							Voltar
						</button>
					</div>
				</header>
				<h1 className="text-2xl font-semibold text-center bg-purple-400 text-white py-2 rounded-lg">
					Atrasos
				</h1>
					{/* Grid Container */}
					<div className="grid grid-cols-[500px,500px] max-w-full max-h-full gap-20 mt-6">

						{/* esquerda */}
						<div className="max-w-full max-h-full border border-gray-300 rounded-lg overflow-hidden p-6 ml-[60px]">
						<div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="font-medium">
                Funcionário
              </Button>
              <Button variant="outline" className="font-medium">
                Data de Atraso
              </Button>
              <Button variant="outline" className="font-medium">
                Avaliação
              </Button>
            </div>
				</div>
			
						</div>

					{/* direta */}
					<div
						className="bg-white w-full max-h-[600px] h-full border border-gray-300 rounded-md p-6 mb-[50px] overflow-y-auto"
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
					>
					</div>
					
				</div>
			</div>
		</main>
	</div>
	);
}
