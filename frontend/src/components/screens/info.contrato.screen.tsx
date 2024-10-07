import { useQuery } from "@tanstack/react-query";
import { getContrato } from "../../http/contratos/queriesContratos";
import { useFuncionarioData } from "../hooks/useFuncionarioData";

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

	return (
		<div className="h-full flex flex-row items-center justify-around gap-44">
			<div>
				<h1>Detalhes</h1>
				<p>Este é o detalhes da página</p>
				<p>{contrato?.carteira_trabalho}</p>
				<p>{contrato?.empresa_contrada}</p>
				<p>{contrato?.supervisor}</p>
				<p>{contrato?.tipo}</p>
				<p>{contrato?.id}</p>
				<h1> RECEBA </h1>
			</div>

			<div>
				<h1>Detalhes</h1>
			</div>
		</div>
	);
};

export default InfoContratos;
