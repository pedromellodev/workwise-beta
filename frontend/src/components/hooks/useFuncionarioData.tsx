import { useQuery } from "@tanstack/react-query";
import { getFuncionario } from "../../http/funcionarios/queriesFuncionarios";

export const useFuncionarioData = (nomeFuncionario: string) => {
	return useQuery({
		queryKey: ["funcionario", nomeFuncionario],
		queryFn: () => getFuncionario(nomeFuncionario),
		staleTime: 1000 * 60,
	});
};
