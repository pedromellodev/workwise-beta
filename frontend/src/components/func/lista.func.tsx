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
			{funcionarios.map((valor) => {
				return (
					<Link to={`/contratos/${valor.nome}`} key={valor.nome}>
						<div className="w-[920px] h-[62px] px-11 py-6 bg-white flex-col justify-center items-start gap-2.5 flex">
							<div className="w-[825px] justify-start items-center gap-[129px] inline-flex">
								<div className="w-[271px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">
									{valor.nome}
								</div>
								<div className="w-[183px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">
									{valor.cpf}
								</div>
								<div className="w-[86px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">
									{valor.status}
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</>
	);
};
