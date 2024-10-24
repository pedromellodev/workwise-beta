import { useParams } from "react-router-dom";
import { ButtonGroup } from "../components/ui/buttonGroup";
import { useState } from "react";
import Info from "../components/screens/info.screen";
import InfoContratos from "../components/screens/info.contrato.screen";

export function Detalhes() {
	const [isSelected, setIsSelected] = useState(0);
	const { nomeFuncionario } = useParams();
	const nomeFuncionarioString = nomeFuncionario ?? "";

	const buttons = [
		"Informações Pessoais",
		"Informações Contrato",
		"Banco de Horas",
		"Avaliações",
		"Documentos",
	];

	type RenderComponentProps = {
		index: number;
	};

	type RenderComponentType = (
		props: RenderComponentProps,
	) => JSX.Element | null | undefined;

	const RenderComponent: RenderComponentType = ({ index }) => {
		switch (index) {
			case 0:
				return <Info nomeFuncionario={nomeFuncionarioString} />;
				// biome-ignore lint/correctness/noUnreachable: <explanation>
				break;
			case 1:
				return <InfoContratos nomeFuncionario={nomeFuncionarioString} />;
				// biome-ignore lint/correctness/noUnreachable: <explanation>
				break;
			default:
				break;
		}
	};

	return (
		<div className="h-screen flex flex-col flex-initial items-center justify-center">
			<div className="h-4/5 w-4/6 bg-slate-200 flex flex-initial flex-row items-center justify-around gap-44">
				<div className="h-full ms-1 flex-initial">
					<h1 className="text-3xl font-bold">Detalhes do Funcionário</h1>
					<ButtonGroup
						buttons={buttons}
						isSelected={isSelected}
						setIsSelected={setIsSelected}
					/>
				</div>

				<div className="h-full flex flex-row items-center justify-around gap-44">
					<RenderComponent index={isSelected} />
				</div>
				{/*	<div>
						<h1>Detalhes</h1>
						<p>Este é o detalhes da página</p>
						<p>{data?.cpf}</p>
						<p>{data?.escolaridade}</p>
						<p>{data?.seguro}</p>
						<p>{data?.celular}</p>
						<p>{data?.is_active}</p>
						<p>{data?.telefone}</p>
						<p>{data?.seguro}</p>
						<p>{data?.pis}</p>
					</div>

					<div>
						<h1>Detalhes</h1>
						
					</div>*/}
			</div>
		</div>
	);
}
