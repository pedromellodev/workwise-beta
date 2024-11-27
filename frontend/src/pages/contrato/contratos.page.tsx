import { useState, useEffect } from "react";
import {
	Search,
	Plus,
	Loader2,
	ChevronLeft,
	PlusIcon,
	CircleArrowOutDownRight,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import workwise_logo from "../../assets/workwise_logo.svg";
import icon_menu from "../../assets/icon_menu.svg";
import { AddEmployeeModal } from "./AddEmployeeModal";
import { ListaFunc } from "../../components/func/lista.func";
import { useQuery } from "@tanstack/react-query";
import { getFuncionarios } from "../../http/funcionarios/queriesFuncionarios";

interface Employee {
	id: number;
	name: string;
	cpf: string;
	status: string;
}

export default function Contratos() {
	const handleLogout = () => {
		navigate("/home");
	};

	const [searchTerm, setSearchTerm] = useState("");
	const [showModal, setShowModal] = useState(false); // Controle do modal
	const navigate = useNavigate();

	const { data, isFetching, refetch  } = useQuery({
		queryKey: ["funcionarios"],
		queryFn: getFuncionarios,
		staleTime: 1000 * 60,
	});

	if (!data) {
		console.log("Algo errado");
		return null;
	}
	const teste = data[0];
	console.log(teste);
	const valor = data.map((valore) => {
		return `valor: ${valore.cep}`;
	});
	console.log(data);

	const filteredEmployees = data.filter((employee) =>
		employee.nome.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<div className="h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 flex flex-col overflow-hidden">
			{/* Top bar */}
			<div className="w-full flex justify-between items-center bg-purple-300 z-50">
				{/* Logo WorkWise que abre o menu */}
				<div className="relative">
					{/* Checkbox para o menu */}
					<input type="checkbox" id="menu" className="hidden peer" />

					{/* Logo como botão do menu */}
					<img src={workwise_logo} alt="WorkWise Logo" className="h-12" />

					{/* Lista do menu */}
					<ul className="absolute top-0 right-0 left-[-380px] w-[370px] bg-white shadow-lg rounded-lg p-4 min-h-screen transition-transform duration-300 ease-in-out peer-checked:translate-x-[370px]">
						<div className="flex flex-col min-h-screen bg-white">
							{/* Header */}
							<header className="p-6 flex flex-col items-center space-y-1">
								<div className="flex items-center space-x-2">
									<img
										src={workwise_logo}
										alt="WorkWise Logo"
										className="h-12"
									/>
									<h1 className="text-xl font-semibold">WorkWise</h1>
								</div>
								<p className="text-sm text-muted-foreground">O futuro do RH</p>
							</header>

							{/* Navigation Menu */}
							<nav className="flex-1 flex flex-col pl-0 space-y-50">
								{/* Navigation Links */}
								<div>
									{[
										{ name: "Tela Inicial", route: "/home" },
										{ name: "Contratos", route: "/contratos" },
										{ name: "Avaliações", route: "/avaliacoes" },
										{ name: "Férias", route: "/ferias" },
										{ name: "Banco de Horas", route: "/banco-de-horas" },
										{ name: "Configurações", route: "/configuracoes" },
										{ name: "SAC", route: "/sac" },
									].map(({ name, route }) => (
										<Link
											key={name}
											to={route}
											className="w-[355px] h-[50px] pl-[50px] pr-[140px] py-[22px] bg-white justify-start items-center gap-2.5 inline-flex  hover:text-purple-600 transition"
										>
											{name}
										</Link>
									))}
								</div>
							</nav>
						</div>
					</ul>

					<label
						htmlFor="menu"
						className="cursor-pointer absolute left-[0px] top-[390px] flex-col justify-center items-center inline-flex transition-all duration-300 ease-in-out peer-checked:translate-x-[360px]"
					>
						<div className="w-[42px] h-[150px] px-[13px] py-[59px] pl-0 bg-white rounded-tr-[30px] rounded-br-[30px] justify-start items-center gap-2.5 inline-flex">
							<img src={icon_menu} alt="Abrir/Fechar menu" className="h-150" />
						</div>
					</label>
				</div>
			</div>

			{/* Main content */}
			<div className="flex p-6 space-x-6">
				{/* Content Section */}
				<div className="flex-grow bg-white rounded-lg shadow-lg p-6 mx-24">
					<div className="flex justify-between items-center mb-6">
						<div className="relative flex-grow mr-4 z-10">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
							<Input
								className="pl-10 w-full"
								placeholder="Pesquisar funcionários..."
								type="search"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
					</div>

					<div className="grid grid-cols-3 gap-4 font-semibold">
						<div>Nome</div>
						<div>CPF</div>
						<div>Status</div>
					</div>

					{isFetching ? (
						<div className="flex justify-center items-center h-64 bg-white">
							<Loader2 className="h-8 w-8 animate-spin text-purple-600" />
						</div>
					) : (
						<>
							{filteredEmployees ? (
								<>
									<ul className="space-y-2">
										{filteredEmployees.map((employee) => (
											<li
												key={employee.nome}
												className="bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-white hover:text-purple-600 transition shadow md"
											>
												<Link to={`/contratos/${employee.nome}`}>
													<div className="grid grid-cols-3 gap-4">
														<div className="w-[271px] truncate text-[#1f1f1f] text-2xl font-normal font-['Alata']">
															{employee.nome}
														</div>
														<div className="w-[183px] truncate text-[#1f1f1f] text-2xl font-normal font-['Alata']">
															{employee.cpf}
														</div>
														<div className="w-[86px] truncate text-[#1f1f1f] text-2xl font-normal font-['Alata']">
															{employee.status}
														</div>
													</div>
												</Link>
											</li>
										))}
									</ul>
								</>
							) : (
								<ListaFunc funcionarios={data} />
							)}
						</>
					)}
				</div>

				{/* Button Section */}
				<div className="flex gap-2 justify-end items-start">
					<Button
						variant="primary"
						className="bg-purple-600 text-white hover:bg-white hover:text-purple-600 transition shadow md"
						onClick={() => setShowModal(true)}
					>
						<Plus className="mr-2 h-4 w-4" />
						Novo Funcionário
					</Button>

					<div>
						<Button
							type="button"
							variant="primary"
							onClick={refetch}
							className="bg-purple-600 text-white hover:bg-white hover:text-purple-600 transition shadow md"
						>
							<CircleArrowOutDownRight />
							Recarregar
						</Button>
					</div>
				</div>
			</div>

			{/* {showModal && (
				<AddEmployeeModal
					onClose={() => setShowModal(false)} // Fechar o modal
					onSubmit={handleAddEmployee} // Adicionar funcionário
				/>
			)} */}
		</div>
	);
}
