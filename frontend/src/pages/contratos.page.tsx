import { useState, useEffect } from "react";
import { Search, Plus, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import workwise_logo from "../assets/workwise_logo.svg";

interface Employee {
  id: number;
  name: string;
}

export default function Contratos() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const exampleEmployees: Employee[] = [
      { id: 1, name: "João Silva" },
      { id: 2, name: "Maria Oliveira" },
      { id: 3, name: "Carlos Souza" },
      { id: 4, name: "Ana Santos" },
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
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-blue-400 flex flex-col">
      <div className="w-full p-3 flex justify-between items-center bg-purple-400">
        <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
      </div>
  
      <div className="flex-grow p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
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
            <Button variant="primary" className="bg-purple-600 text-white hover:bg-purple-700">
              <Plus className="mr-2 h-4 w-4" />
              Novo Funcionário
            </Button>
          </div>
  
          {isFetching ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
            </div>
          ) : (
            <ul className="space-y-2">
              {filteredEmployees.map(employee => (
                <li key={employee.id} className="bg-gray-100 p-4 rounded-md">
                  {employee.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}