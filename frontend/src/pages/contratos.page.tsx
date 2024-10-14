import { PlusIcon } from "lucide-react";
import { ListaFunc } from "../components/func/lista.func";
import { useFuncionariosData } from "../components/hooks/useFuncionarioData";
import { Button } from "../components/ui/button";
import { SearchBar } from "../components/func/search.func";

export function Contratos() {
	const { data, isFetching, refetch } = useFuncionariosData();

	if (!data) {
		return null;
	}
	console.log(data);

	if (isFetching) {
		alert("Carregando");
	}

	return (
		<>
			<div className="h-screen flex flex-col items-center justify-center ">
				<div className="rounded-md flex flex-row justify-between gap-2.5">
					<div className="self-stretch h-[515px] rounded flex-col justify-start items-start flex">
						<div className="self-stretch h-[84px] px-11 py-6 bg-[#9775fa] flex-col justify-start items-start gap-2.5 flex">
							<div className="w-[825px] justify-start items-center gap-[307px] inline-flex">
								<div className="w-[83px] text-center text-white text-[26px] font-normal font-['Alata']">
									Nome
								</div>
								<div className="w-[51px] text-center text-white text-[26px] font-normal font-['Alata']">
									CPF
								</div>
								<div className="w-[86px] text-center text-white text-[26px] font-normal font-['Alata']">
									Status
								</div>
							</div>
						</div>
						<div className="overflow-y-auto">
							<ListaFunc funcionarios={data} />
						</div>
					</div>
					<div className="flex items-start flex-col gap-2">
						<div>
							<SearchBar />
						</div>
						<div>
							<Button onClick={refetch}>
								<PlusIcon />
								Novo Funcionario
							</Button>
						</div>
						<div>
							<Button onClick={refetch}>Recarregar</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
