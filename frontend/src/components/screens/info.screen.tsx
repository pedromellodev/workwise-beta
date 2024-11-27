import React from "react";
import { useFuncionarioData } from "../hooks/useFuncionarioData";

type RenderComponentProps = {
	nomeFuncionario: string;
};

type RenderComponentType = (
	props: RenderComponentProps,
) => JSX.Element | null | undefined;

const Info: RenderComponentType = ({ nomeFuncionario }) => {
	const { data } = useFuncionarioData(nomeFuncionario);

	function getAge(dateString: string | number | Date): number {
		const today = new Date();
		const birthDate = new Date(dateString);
		let age = today.getFullYear() - birthDate.getFullYear();
		const m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

	const personalInfo = [
		{ label: "Nome", value: data?.nome },
		{ label: "CPF", value: data?.cpf },
		{ label: "RG", value: data?.rg },
		{ label: "Idade", value: data?.dt_nasc ? getAge(data.dt_nasc) : null },
		{ label: "Data de Nascimento", value: data?.dt_nasc },
		{ label: "Telefone", value: data?.telefone },
		{ label: "Celular", value: data?.celular },
	];
	const LocalInfo = [
		{ label: "CEP", value: data?.cep },
		{ label: "Rua", value: data?.rua },
		{ label: "Número", value: data?.numero },
		{ label: "Bairro", value: data?.bairro },
		{ label: "Distrito", value: data?.distrito },
		{ label: "Complemento", value: data?.complemento },
	];

	const EscolaInfo = [
		{ label: "Escola", value: "Erasmo Cabral" },
		{ label: "CNPJ", value: "xxx.xxx.xxx-xx" },
		{ label: "CEP", value: "xx.xxx.xxx-xx" },
		{ label: "Endereço", value: "17 anos" },
		{ label: "Telefone", value: "17/02/2006" },
		{ label: "Cursando", value: "xx xxxxx-xx" },
		{ label: "Ano/Semestre", value: "xx xxxxx-xx" },
		{ label: "Termino", value: "xx xxxxx-xx" },
	];

	const ContaInfo = [
		{ label: "Banco", value: "Erasmo Cabral" },
		{ label: "Agência", value: "xxx.xxx.xxx-xx" },
		{ label: "Conta", value: "xx.xxx.xxx-xx" },
		{ label: "Tipo", value: "17 anos" },
	];

	return (
		<div className="w-full">
			<h2 className="bg-purple-400 text-white text-center py-2 rounded-md mb-6">
				Dados Pessoais
			</h2>
			<div className="grid grid-cols-[200px,1fr] gap-4">
				{personalInfo.map((item) => (
					<React.Fragment key={item.label}>
						<div className="border rounded-md p-2 text-center">
							{item.label}
						</div>
						<div className="border rounded-md p-2 text-center">
							{item.value}
						</div>
					</React.Fragment>
				))}
			</div>

			{/* Dados Residenciais */}
			<h2 className="bg-purple-400 text-white text-center py-2 rounded-md mb-6">
				Dados Residencial
			</h2>
			<div className="grid grid-cols-[200px,1fr] gap-4">
				{LocalInfo.map((item) => (
					<React.Fragment key={item.label}>
						<div className="border rounded-md p-2 text-center">
							{item.label}
						</div>
						<div>{item.value}</div>
					</React.Fragment>
				))}
			</div>

			{/* Dados Escolar */}
			<h2 className="bg-purple-400 text-white text-center py-2 rounded-md mb-6">
				Dados Escolares
			</h2>
			<div className="grid grid-cols-[200px,1fr] gap-4">
				{EscolaInfo.map((item) => (
					<React.Fragment key={item.label}>
						<div className="border rounded-md p-2 text-center">
							{item.label}
						</div>
						<div>{item.value}</div>
					</React.Fragment>
				))}
			</div>

			{/* Dados Bancarios */}
			<h2 className="bg-purple-400 text-white text-center py-2 rounded-md mb-6">
				Dados Bancario
			</h2>
			<div className="grid grid-cols-[200px,1fr] gap-4">
				{ContaInfo.map((item) => (
					<React.Fragment key={item.label}>
						<div className="border rounded-md p-2 text-center">
							{item.label}
						</div>
						<div>{item.value}</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Info;
