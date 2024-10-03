import { useParams } from "react-router-dom";

export function DetalhesFuncionario() {
	const { id } = useParams();
	// função que busca os detalhes do funcionário
	console.log(id);
	return <div>recebido</div>;
}
