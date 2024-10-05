import { useParams } from "react-router-dom";
import { useFuncionarioData } from "../components/hooks/useFuncionarioData";

export function Detalhes() {
	const { nomeFuncionario } = useParams();
	const { data } = useFuncionarioData(nomeFuncionario ?? "");

	return (
		<div className="detalhes">
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
	);
}
