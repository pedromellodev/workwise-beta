import { useQuery } from "@tanstack/react-query";
import { getContrato } from "../../http/contratos/queriesContratos";
import { useFuncionarioData } from "../hooks/useFuncionarioData";
import React from "react";

type RenderComponentProps = {
	nomeFuncionario: string;
};

type RenderComponentType = (
	props: RenderComponentProps,
) => JSX.Element | null | undefined;

const InfoContratos: RenderComponentType = ({ nomeFuncionario }) => {
	const { data: funcionario } = useFuncionarioData(nomeFuncionario);

	const { data: contrato } = useQuery({
		queryKey: ["funcionario", nomeFuncionario, funcionario?.id],
		queryFn: () => {
			if (funcionario) {
				return getContrato(nomeFuncionario, funcionario.id);
			}
		},
		staleTime: 1000 * 60,
	});
	console.log(funcionario);
	console.log(contrato);

	const contractInfo = [
		{ label: "Contratação", value: contrato?.empresa_contrada },
		{ label: "Cargo", value: contrato?.id },
		{ label: "Supervisor", value: contrato?.supervisor },
		{ label: "Salário", value: contrato?.funcionario_id },
		{ label: "Horário", value: contrato?.horario },
		{ label: "Vigência", value: contrato?.empresa_contrada },
		{ label: "Tempo", value: contrato?.carteira_trabalho },
	];

	return (
		<div>
			<h2 className="bg-purple-400 text-white text-center py-2 rounded-md mb-6">
				Dados Contratuais
			</h2>
			<div className="mb-8 flex justify-between">
				<div className="space-y-10">
					<div className="border rounded-md p-2 text-center">Data Entrada</div>
					<div className="border-b border-gray-300 w-48"></div>
				</div>
				<div className="space-y-10">
					<div className="border rounded-md p-2 text-center">Data Saída</div>
					<div className="border-b border-gray-300 w-48"></div>
				</div>
			</div>
			<div className="grid grid-cols-[200px,1fr] gap-4">
				{contractInfo.map((item) => (
					<React.Fragment key={item.label}>
						<div className="border rounded-md p-2 text-center">
							{item.label}
						</div>
						<div>{item.value}</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default InfoContratos;
