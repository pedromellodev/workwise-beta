import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import type { Funcionarios } from "../../http/funcionarios/queriesFuncionarios";

type RenderComponentProps = {
	funcionarios: Funcionarios;
};

type RenderComponentType = (
	props: RenderComponentProps,
) => JSX.Element | null | undefined;

export const ListaFunc: RenderComponentType = ({ funcionarios }) => {
	return (
		<>
			<ul className="space-y-2">
				{funcionarios.map((valor) => (
					<li
						key={valor.nome}
						className="bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-white hover:text-purple-600 transition shadow md"
					>
						<Link to={`/contratos/${valor.nome}`}>
							<div className="grid grid-cols-3 gap-4">
								<div className="w-[271px] truncate text-[#1f1f1f] text-2xl font-normal font-['Alata']">
									{valor.nome}
								</div>
								<div className="w-[183px] truncate text-[#1f1f1f] text-2xl font-normal font-['Alata']">
									{valor.cpf}
								</div>
								<div className="w-[86px] truncate text-[#1f1f1f] text-2xl font-normal font-['Alata']">
									{valor.status}
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};
