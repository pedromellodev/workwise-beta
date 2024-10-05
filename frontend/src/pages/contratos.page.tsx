import { ListaFunc } from "../components/func/listaFunc";

export function Contratos() {
	return (
		<>
			<div className="h-screen flex flex-col items-center justify-center ">
				<div className="w- rounded-md flex-col justify-start items-start gap-2.5 inline-flex">
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

						<ListaFunc />
					</div>
				</div>
			</div>
		</>
	);
}
