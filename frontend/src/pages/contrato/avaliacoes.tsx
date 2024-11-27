import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, PenSquare, Search, Plus } from 'lucide-react';
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import workwise_logo from "../../assets/workwise_logo.svg";

type Evaluation = {
  employee: string;
  date: string;
  evaluation: string;
};

export function Avaliacoes() {
  const navigate = useNavigate();
  const { nomeFuncionario } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFilter, setCurrentFilter] = useState<'atrasadas' | 'pendentes' | 'futuras'>('atrasadas');

  const atrasadas: Evaluation[] = [
    { employee: "Pedro Henrique Pacheco", date: "12/06/2024", evaluation: "Primeira" },
    { employee: "Maria Silva", date: "15/06/2024", evaluation: "Segunda" },
    { employee: "João Santos", date: "18/06/2024", evaluation: "Terceira" },
  ];

  const pendentes: Evaluation[] = [
    { employee: "Ana Oliveira", date: "20/07/2024", evaluation: "Primeira" },
    { employee: "Carlos Ferreira", date: "22/07/2024", evaluation: "Segunda" },
  ];

  const futuras: Evaluation[] = [
    { employee: "Luisa Mendes", date: "10/08/2024", evaluation: "Primeira" },
    { employee: "Ricardo Alves", date: "15/08/2024", evaluation: "Segunda" },
    { employee: "Sofia Costa", date: "20/08/2024", evaluation: "Primeira" },
  ];

  const evaluations = {
    atrasadas,
    pendentes,
    futuras
  };

  const filteredEvaluations = evaluations[currentFilter].filter(
    (evaluation) => evaluation.employee.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 flex flex-col">
      {/* Header */}
      <header className="bg-purple-300 p-4 flex justify-between items-center">
        <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
        <div className="flex space-x-4">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => navigate("/home")}>
            <ChevronLeft className="h-4 w-4" />
            Voltar
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 flex-grow overflow-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h1 className="text-2xl font-semibold text-center bg-purple-400 text-white py-4 mb-6">
            Avaliações {currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)}
          </h1>

          <div className="grid grid-cols-[2fr,1fr] gap-6 p-6">
            {/* Left Column */}
            <div className="space-y-6">

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Funcionário</TableHead>
                    <TableHead>Data de Avaliação</TableHead>
                    <TableHead>Avaliação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEvaluations.map((evaluation, index) => (
                    <TableRow key={index}>
                      <TableCell>{evaluation.employee}</TableCell>
                      <TableCell>{evaluation.date}</TableCell>
                      <TableCell>{evaluation.evaluation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Pesquisar"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Button className="w-full bg-purple-400 hover:bg-purple-500 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Anexar Avaliação
              </Button>

              <div className="space-y-2">
                <Button 
                  variant={currentFilter === 'atrasadas' ? "secondary" : "outline"} 
                  className={`w-full ${currentFilter === 'atrasadas' ? "bg-purple-400 text-white hover:bg-purple-500" : ""}`}
                  onClick={() => setCurrentFilter('atrasadas')}
                >
                  Avaliações Atrasadas
                </Button>
                <Button 
                  variant={currentFilter === 'pendentes' ? "secondary" : "outline"} 
                  className={`w-full ${currentFilter === 'pendentes' ? "bg-purple-400 text-white hover:bg-purple-500" : ""}`}
                  onClick={() => setCurrentFilter('pendentes')}
                >
                  Avaliações Pendentes
                </Button>
                <Button 
                  variant={currentFilter === 'futuras' ? "secondary" : "outline"} 
                  className={`w-full ${currentFilter === 'futuras' ? "bg-purple-400 text-white hover:bg-purple-500" : ""}`}
                  onClick={() => setCurrentFilter('futuras')}
                >
                  Avaliações Futuras
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}