import type { Funcionarios } from "../../http/funcionarios/queriesFuncionarios";
import { Link } from "react-router-dom";

type RenderComponentProps = {
	data: Funcionarios;
};

type RenderComponentType = (
	props: RenderComponentProps,
) => JSX.Element | null | undefined;
export const ListaFunc: RenderComponentType = ({ data }) => {
	return (
		<>
			{data.map((valor) => {
				return (
					<Link to={`/contratos/${valor.nome}`} key={valor.nome}>
						<div className="block w-[300px] max-w-sm p-6 text-ellipsis truncate whitespace-nowrap bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{valor.nome}
							</h5>
							<p className="font-extrabold text-gray-700 dark:text-gray-400">
								CPF: {valor.cpf}
							</p>
							<p className="font-extrabold text-gray-700 dark:text-gray-400">
								Status: {valor.status}
							</p>
						</div>
					</Link>
				);
			})}
		</>
	);
};
