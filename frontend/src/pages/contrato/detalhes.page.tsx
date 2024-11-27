import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Info from "../../components/screens/info.screen";
import InfoContratos from "../../components/screens/info.contrato.screen";
import BancoHoras from "../../components/screens/banco.screen";
import { ChevronLeft, PenSquare } from "lucide-react";
import Avaliacao from "../../components/screens/avaliacao.screen";
import Documentos from "../../components/screens/documentos.screen";

export function Detalhes() {
	const { nomeFuncionario } = useParams();
	const navigate = useNavigate();
	const nomeFuncionarioString = nomeFuncionario ?? "";
	const [selectedOption, setSelectedOption] = useState("personal");

	const menuItems = [
		{ label: "Informações Pessoais", id: "personal" },
		{ label: "Informações Contrato", id: "contract" },
		{ label: "Banco de Horas", id: "timebank" },
		{ label: "Avaliações", id: "evaluations" },
		{ label: "Documentos", id: "documents" },
	];

	type RenderComponentProps = {
		index: string;
	};

	type RenderComponentType = (
		props: RenderComponentProps,
	) => JSX.Element | null | undefined;

	const RenderComponent: RenderComponentType = ({ index }) => {
		switch (index) {
			case "personal":
				return <Info nomeFuncionario={nomeFuncionarioString} />;
			case "contract":
				return <InfoContratos nomeFuncionario={nomeFuncionarioString} />;
			case "timebank":
				return <BancoHoras nomeFuncionario={nomeFuncionarioString} />;
			case "evaluations":
				return <Avaliacao nomeFuncionario={nomeFuncionarioString} />;
			case "documents":
				return <Documentos nomeFuncionario={nomeFuncionarioString} />;
			default:
				break;
		}
	};

	return (
		<div className="h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 flex flex-col">
			{/* Header */}
			<div className="w-full flex justify-between items-center bg-purple-300">
				{/* <img src={workwise_logo} alt="WorkWise Logo" className="h-12" /> */}
			</div>

			{/* Main Content */}
			<main
				className="container mx-auto p-3 overflow-y-auto h-screen scrollbar-hidden"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				<div className="bg-white rounded-lg shadow-lg overflow-hidden mx-[42px] my-[px]">
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
										type="button"
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
							<RenderComponent index={selectedOption} />
						</div>
					</div>
				</div>
			</main>
		</div>
		// <div className="h-screen flex flex-col flex-initial items-center justify-center">
		// 	<div className="h-4/5 w-4/6 bg-slate-200 flex flex-initial flex-row items-center justify-around gap-44">
		// 		<div className="h-full ms-1 flex-initial">
		// 			<h1 className="text-3xl font-bold">Detalhes do Funcionário</h1>
		// 			<ButtonGroup
		// 				buttons={buttons}
		// 				isSelected={isSelected}
		// 				setIsSelected={setIsSelected}
		// 			/>
		// 		</div>

		// 		<div className="h-full flex flex-row items-center justify-around gap-44">
		// 			<RenderComponent index={isSelected} />
		// 		</div>
		// 		{/*	<div>
		// 				<h1>Detalhes</h1>
		// 				<p>Este é o detalhes da página</p>
		// 				<p>{data?.cpf}</p>
		// 				<p>{data?.escolaridade}</p>
		// 				<p>{data?.seguro}</p>
		// 				<p>{data?.celular}</p>
		// 				<p>{data?.is_active}</p>
		// 				<p>{data?.telefone}</p>
		// 				<p>{data?.seguro}</p>
		// 				<p>{data?.pis}</p>
		// 			</div>

		// 			<div>
		// 				<h1>Detalhes</h1>

		// 			</div>*/}
		// 	</div>
		// </div>
	);
}
