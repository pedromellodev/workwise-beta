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
		<div className="h-[907px] bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 flex-col justify-center items-start inline-flex">
			<div className="self-stretch h-20 px-3.5 py-[18px] bg-purple-300 justify-between items-center inline-flex">
				<div className="w-[57px] h-[55px] relative">
					<div className="origin-top-left rotate-[8.25deg] w-12 h-[53.01px] left-[9.54px] top-[0.16px] absolute">
					</div>
				</div>
				<div className="justify-start items-center gap-5 flex">
					<div className="w-[33.40px] h-[35px] relative" />
					<div className="w-[35px] h-[35px] relative" />
				</div>
			</div>
			<div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex">
				<div className="w-20 h-[827px] pr-[11px] py-[337px] justify-start items-center gap-3 flex">
					<div className="w-[42px] h-[150px] flex-col justify-center items-center inline-flex">
						<div className="w-[42px] h-[150px] px-[13px] py-[59px] bg-white rounded-tr-[30px] rounded-br-[30px] justify-start items-center gap-2.5 inline-flex" />
					</div>
				</div>
				<div className="w-[1360px] h-[827px] px-[27px] py-[105px] justify-start items-start gap-[29px] flex">
					<div className="w-[920px] rounded-md flex-col justify-start items-start gap-2.5 inline-flex">
						<div className="self-stretch h-[515px] rounded flex-col justify-start items-start flex">
							<div className="self-stretch h-[84px] px-11 py-6 bg-purple-500 flex-col justify-start items-start gap-2.5 flex">
								<div className="w-[825px] justify-start items-center gap-[307px] inline-flex">
									<div className="w-[83px] text-center text-white text-[26px] font-normal font-['Alata']">Nome</div>
									<div className="w-[51px] text-center text-white text-[26px] font-normal font-['Alata']">CPF</div>
									<div className="w-[86px] text-center text-white text-[26px] font-normal font-['Alata']">Status</div>
								</div>
							</div>
							<div className="self-stretch h-[682px] flex-col justify-start items-start flex">
								<div className="w-[920px] h-[62px] px-11 py-6 bg-white flex-col justify-center items-start gap-2.5 flex">
									<div className="w-[825px] justify-start items-center gap-[129px] inline-flex">
										<div className="w-[271px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Pedro Henrique Pacheco</div>
										<div className="w-[183px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">xxx.xxxx.xxx-xx</div>
										<div className="w-[86px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Ativo</div>
									</div>
								</div>
								<div className="w-[920px] h-[62px] px-11 py-6 bg-[#c9c9c9] flex-col justify-center items-start gap-2.5 flex">
									<div className="w-[825px] justify-start items-center gap-[129px] inline-flex">
										<div className="w-[271px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Pedro Henrique Pacheco</div>
										<div className="w-[183px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">xxx.xxxx.xxx-xx</div>
										<div className="w-[86px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Ativo</div>
									</div>
								</div>
								<div className="w-[920px] h-[62px] px-11 py-6 bg-white flex-col justify-center items-start gap-2.5 flex">
									<div className="w-[825px] justify-start items-center gap-[129px] inline-flex">
										<div className="w-[271px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Pedro Henrique Pacheco</div>
										<div className="w-[183px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">xxx.xxxx.xxx-xx</div>
										<div className="w-[86px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Ativo</div>
									</div>
								</div>
								<div className="w-[920px] h-[62px] px-11 py-6 bg-[#c9c9c9] flex-col justify-center items-start gap-2.5 flex">
									<div className="w-[825px] justify-start items-center gap-[129px] inline-flex">
										<div className="w-[271px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Pedro Henrique Pacheco</div>
										<div className="w-[183px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">xxx.xxxx.xxx-xx</div>
										<div className="w-[86px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Ativo</div>
									</div>
								</div>
								<div className="w-[920px] h-[62px] px-11 py-6 bg-white flex-col justify-center items-start gap-2.5 flex">
									<div className="w-[825px] justify-start items-center gap-[129px] inline-flex">
										<div className="w-[271px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Pedro Henrique Pacheco</div>
										<div className="w-[183px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">xxx.xxxx.xxx-xx</div>
										<div className="w-[86px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Ativo</div>
									</div>
								</div>
								<div className="w-[920px] h-[62px] px-11 py-6 bg-[#c9c9c9] flex-col justify-center items-start gap-2.5 flex">
									<div className="w-[825px] justify-start items-center gap-[129px] inline-flex">
										<div className="w-[271px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Pedro Henrique Pacheco</div>
										<div className="w-[183px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">xxx.xxxx.xxx-xx</div>
										<div className="w-[86px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Ativo</div>
									</div>
								</div>
								<div className="w-[920px] h-[62px] px-11 py-6 bg-white flex-col justify-center items-start gap-2.5 flex">
									<div className="w-[825px] justify-start items-center gap-[129px] inline-flex">
										<div className="w-[271px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Pedro Henrique Pacheco</div>
										<div className="w-[183px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">xxx.xxxx.xxx-xx</div>
										<div className="w-[86px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Ativo</div>
									</div>
								</div>
								<div className="w-[920px] h-[62px] px-11 py-6 bg-[#c9c9c9] flex-col justify-center items-start gap-2.5 flex">
									<div className="w-[825px] justify-start items-center gap-[129px] inline-flex">
										<div className="w-[271px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Pedro Henrique Pacheco</div>
										<div className="w-[183px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">xxx.xxxx.xxx-xx</div>
										<div className="w-[86px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Ativo</div>
									</div>
								</div>
								<div className="w-[920px] h-[62px] px-11 py-6 bg-white flex-col justify-center items-start gap-2.5 flex">
									<div className="w-[825px] justify-start items-center gap-[129px] inline-flex">
										<div className="w-[271px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Pedro Henrique Pacheco</div>
										<div className="w-[183px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">xxx.xxxx.xxx-xx</div>
										<div className="w-[86px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Ativo</div>
									</div>
								</div>
								<div className="w-[920px] h-[62px] px-11 py-6 bg-[#c9c9c9] flex-col justify-center items-start gap-2.5 flex">
									<div className="w-[825px] justify-start items-center gap-[129px] inline-flex">
										<div className="w-[271px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Pedro Henrique Pacheco</div>
										<div className="w-[183px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">xxx.xxxx.xxx-xx</div>
										<div className="w-[86px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Ativo</div>
									</div>
								</div>
								<div className="w-[920px] h-[62px] px-11 py-6 bg-white flex-col justify-center items-start gap-2.5 flex">
									<div className="w-[825px] justify-start items-center gap-[129px] inline-flex">
										<div className="w-[271px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Pedro Henrique Pacheco</div>
										<div className="w-[183px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">xxx.xxxx.xxx-xx</div>
										<div className="w-[86px] text-center text-[#1f1f1f] text-2xl font-normal font-['Alata']">Ativo</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-[335px] flex-col justify-start items-start gap-[31px] inline-flex">
						<div className="self-stretch h-[41px] flex-col justify-start items-end flex">
							<div className="self-stretch h-[41px] px-[39px] py-[17px] bg-white rounded border border-[#1f1f1f]" />
							<div className="w-10 h-[41.03px] relative" />
						</div>
						<div className="self-stretch h-[41px] px-[34px] py-0.5 justify-start items-center gap-2.5 inline-flex">
							<div className="w-[335px] h-[41px] px-[39px] py-[17px] bg-purple-400 rounded border border-[#1f1f1f] justify-start items-center gap-7 flex">
								<div className="grow shrink basis-0 text-center text-[#1f1f1f] text-2xl font-normal font-['Alata'] leading-[28.80px]">Novo Funcionário</div>
							</div>
							<div className="w-9 h-9 relative" />
						</div>
					</div>
				</div>
			</div>
</div>
	);
}
