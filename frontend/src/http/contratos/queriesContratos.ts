import axios from "axios";

type Contrato = {
	id: number;
	funcionario_id: number;
	tipo: string;
	supervisor: string;
	horario: Date;
	carteira_trabalho: number;
	empresa_contrada: string;
};

const config = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};
const url = "http://127.0.0.1:8000/api/funcionarios/";

export async function getContrato(nome: string, id: number): Promise<Contrato> {
	try {
		const response = await axios.get(`${url}${nome}/contratos/${id}/`, config);
		return response.data;
	} catch (error) {
		console.error("Erro na query:", error);
		throw error;
	}
}
