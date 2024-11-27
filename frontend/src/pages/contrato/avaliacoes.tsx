import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, PenSquare } from "lucide-react";
import workwise_logo from "../../assets/workwise_logo.svg";

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
											selectedOption === item.id
												? "bg-purple-200"
												: "hover:bg-gray-100"
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
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
					>
					</div>
				</div>
			</div>
		</main>
	</div>
	);
}
