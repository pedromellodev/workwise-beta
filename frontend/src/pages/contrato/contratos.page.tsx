import { useState, useEffect } from "react";
import { Search, Plus, Loader2, ChevronLeft } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import workwise_logo from "../../assets/workwise_logo.svg";
import { useNavigate } from "react-router-dom";

interface Employee {
  id: number;
  name: string;
  cpf: string;
  status: string;
}

export default function Contratos() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/contratos");
  };
  
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const exampleEmployees: Employee[] = [
      { id: 1, name: "João Silva", cpf: "xxx.xxx.xxx-xx", status: "ativo" },
      { id: 2, name: "Maria Oliveira", cpf: "xxx.xxx.xxx-xx", status: "ativo" },
      { id: 3, name: "Carlos Souza", cpf: "xxx.xxx.xxx-xx", status: "desligado" },
      { id: 4, name: "Ana Santos", cpf: "xxx.xxx.xxx-xx", status: "desligado" },
    ];

    setTimeout(() => {
      setEmployees(exampleEmployees);
      setIsFetching(false);
    }, 1000);
  }, []);

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-roxo-primario flex flex-col">
      <div className="w-full p-1 flex justify-between items-center bg-white">
        <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
        <ChevronLeft onClick={() => navigate("/home")} className="h-6 w-6 text-purple-500 cursor-pointer hover:scale-110 duration-300 ease-in-out" title="Logout"
        />
      </div>

      {/* Main content and button in the same row */}
      <div className="flex p-6 space-x-6">
        {/* Content Section */}
        <div className="flex-grow bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-grow mr-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                className="pl-10 w-full"
                placeholder="Pesquisar funcionários..."
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {isFetching ? (
            <div className="flex justify-center items-center h-64 bg-white">
              <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
            </div>
          ) : (
            <ul className="space-y-2">
              <li className="bg-gray-100 p-4 rounded-md">
                {/* Títulos das colunas */}
                <div className="grid grid-cols-3 gap-4 font-semibold">
                  <div>Nome</div>
                  <div>CPF</div>
                  <div>Status</div>
                </div>
              </li>
              {filteredEmployees.map(employee => (
                <li 
                  key={employee.id} 
                  className="bg-gray-100 p-4 rounded-md cursor-pointer" 
                  onClick={() => navigate("/contratos/detalhes")} // Navega para a página do funcionário específico
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div>{employee.name}</div>
                    <div>{employee.cpf}</div>
                    <div>{employee.status}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Button Section */}
        <div className="flex justify-end items-start">
          <Button variant="primary" className="bg-purple-600 text-white hover:bg-white hover:text-purple-600 transition shadow md">
            <Plus className="mr-2 h-4 w-4" />
            Novo Funcionário
          </Button>
        </div>
      </div>
    </div>
  );
}
