import { ListaFunc } from "../components/func/lista.func";
import { useQuery } from "@tanstack/react-query";
import { getFuncionarios } from "../http/funcionarios/queriesFuncionarios";

import { Button } from "../components/ui/button";

export function Contratos() {
	const { data, isLoading, isFetching, refetch } = useQuery({
		queryKey: ["funcionarios"],
		queryFn: getFuncionarios,
		staleTime: 1000,
		refetchOnWindowFocus: false,
	});

	if (!data) {
		return null;
	}

	// const teste = data[0];
	// console.log(teste);
	console.log({ isLoading: isLoading, isFetching: isFetching });

	// const valor = data.map((valore) => {
	// 	return `valor: ${valore.cep}`;
	// });
	// console.log(data);
	return (
		<>
			<h1>Contratos</h1>
			<div className="h-full flex flex-row justify-around ">
				<div className="w-[1000px] h-full mt-12 pl-4 flex flex-row flex-wrap gap-4">
					<ListaFunc data={data} />
				</div>
				<div className="w-10 h-full justify-start order-1">
					<div className=" text-center text-white text-[26px] font-normal font-['Alata']">
						Nome
					</div>
					<div className=" text-center text-white text-[26px] font-normal font-['Alata']">
						CPF
					</div>
					{/* <div className="w-[86px] text-center text-white text-[26px] font-normal font-['Alata']">
						Status
					</div> */}
				</div>
			</div>
		</>
	);
}
