import axios from "axios";

type Funcionarios = {
	id: number;
	profile_id: number | null;
	nome: string;
	rg: string;
	cpf: string;
	pis: string;
	dt_nasc: Date;
	escolaridade: string;
	status: string;
	seguro: false;
	is_active: true;
	telefone: string;
	celular: string;
	cep: string;
	rua: string;
	numero: number;
	distrito: string;
	bairro: string;
	complemento: string;
}[];

type Funcionario = {
	id: number;
	profile_id: number | null;
	nome: string;
	rg: string;
	cpf: string;
	pis: string;
	dt_nasc: Date;
	escolaridade: string;
	status: string;
	seguro: false;
	is_active: true;
	telefone: string;
	celular: string;
	cep: string;
	rua: string;
	numero: number;
	distrito: string;
	bairro: string;
	complemento: string;
};

const config = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};
const url = "http://127.0.0.1:8000/api/";

export async function getFuncionarios(): Promise<Funcionarios> {
	try {
		const response = await axios.get(
			"http://127.0.0.1:8000/api/funcionarios/",
			config,
		);
		return response.data;
	} catch (error) {
		console.error("Erro na query:", error);
		throw error;
	}
}

export async function getFuncionario(nome: string): Promise<Funcionario> {
	try {
		const response = await axios.get(
			`http://127.0.0.1:8000/api/funcionarios/${nome}/`,
			config,
		);
		return response.data;
	} catch (error) {
		console.error("Erro na query:", error);
		throw error;
	}
}
