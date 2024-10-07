import { useFuncionarioData } from "../hooks/useFuncionarioData";

type RenderComponentProps = {
	nomeFuncionario: string;
};

type RenderComponentType = (
	props: RenderComponentProps,
) => JSX.Element | null | undefined;

const Info: RenderComponentType = ({ nomeFuncionario }) => {
	const { data } = useFuncionarioData(nomeFuncionario);

	return (
		<div className="h-full flex flex-row items-center justify-around gap-44">
			<div>
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
			</div>
		</div>
	);
};

export default Info;
