import { useQuery } from "@tanstack/react-query";
import { getFuncionarios } from "../../http/funcionarios/queriesFuncionarios";
import { Link } from "react-router-dom";

export function ListaFunc() {
	const { data } = useQuery({
		queryKey: ["funcionarios"],
		queryFn: getFuncionarios,
		staleTime: 1000 * 60,
	});

	if (!data) {
		return null;
	}
	const teste = data[0];
	console.log(teste);
	const valor = data.map((valore) => {
		return `valor: ${valore.cep}`;
	});
	console.log(data);

	return (
		<div className="self-stretch h-[682px] flex-col justify-start items-start flex">
			<div className="w-[920px] h-[62px] px-11 py-6 bg-white flex-col justify-center items-start gap-2.5 flex">
				{data.map((valor) => {
					return (
						<Link to={`/contratos/${valor.nome}`} key={valor.nome}>
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
						</Link>
					);
				})}
			</div>
		</div>
	);
}
