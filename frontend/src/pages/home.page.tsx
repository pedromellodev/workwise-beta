import { useEffect, useState } from "react";
import { useAuthContext } from "../cli/AuthContext";
import workwise_logo from "../assets/workwise_logo.svg";
import contratos_icon from "../assets/contratos_icon.svg";
import banco_horas_icon from "../assets/banco_horas_icon.svg"
import avaliacoes_icon from "../assets/avaliacoes_icon.svg"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Home() {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  // Função de Logout
  const handleLogout = () => {
    logout(); // Função que desloga o usuário
    // navigate("/"); // Redireciona para a página de login
    navigate("/contratos");
  };

  const { auth, isLoggedIn } = useAuthContext();
  const user = isLoggedIn ? auth : null;

  const [weatherData, setWeatherData] = useState({
    temperature: "",
    date: new Date().toLocaleDateString(),
    weekday: new Date().toLocaleString("pt-BR", { weekday: "long" }),
  });

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=bcd545c643064e78aa7142754240511&q=SAO_PAULO&lang=pt`
        );
        const temp = response.data.current.temp_c + "°C";
        setWeatherData({
          ...weatherData,
          temperature: temp,
          date: new Date().toLocaleDateString(),
          weekday: new Date().toLocaleString("pt-BR", { weekday: "long" }),
        });
      } catch (error) {
        console.error("Erro ao buscar dados climáticos:", error);
      }
    }
    fetchWeather();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-b from-purple-600 to-blue-400 overflow-hidden flex flex-col items-center">
      {/* Navbar */}
      <div className="w-full p-3 flex justify-between items-center bg-purple-400">
        <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
      </div>

      {/* Temperatura/Data/Dia da semana */}
      <div className="absolute top-20 right-4 text-white text-right">
        <p className="text-sm font-medium">
          {weatherData.temperature} | {weatherData.date}
        </p>
        <p className="text-xs text-gray-200">{weatherData.weekday}</p>
      </div>

      {/* Conteúdo principal */}
      <div className="flex w-5/6 mt-8 gap-8">
        {/* Quadro de Lembretes */}
        <div className="w-1/2">
          <h1 className="text-xl font-semibold text-white">
            Bem-vindo(a) de volta, {user ? user.username : "Usuário"}!
          </h1>
          <p className="text-sm text-gray-200">Já conferiu suas notificações?</p>

          <div className="bg-white shadow-lg rounded-lg p-6 mt-4" style={{ height: "350px" }}>
            <h2 className="text-lg font-bold text-purple-600">Quadro de Lembretes</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex justify-between text-gray-700">
                <span>Hoje:</span>
                <span>Reunião Workwise</span>
                <span>10:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Utilizados com Frequência */}
        <div className="flex flex-col w-1/2 items-center justify-end mb-4">
          <h2 className="text-lg font-bold text-black mb-4">Utilizados com frequência</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Ícone Contratos */}
            <div className="flex flex-col items-center text-white">
              <div
                className="bg-white p-4 rounded-full cursor-pointer"
                onClick={() => navigate("/contratos")}
                title="Contratos"
              >
                <img src={contratos_icon} alt="Contratos" className="w-12 h-12" />
              </div>
              <p className="mt-2">Contratos</p>
            </div>

            {/* Ícone Banco de Horas */}
            <div className="flex flex-col items-center text-white">
              <div
                className="bg-white p-4 rounded-full cursor-pointer"
                onClick={() => navigate("/banco-horas")}  // Substitua com a rota correspondente
                title="Banco de Horas"
              >
                <img src={banco_horas_icon} alt="Banco de Horas" className="w-12 h-12" />
              </div>
              <p className="mt-2">Banco de Horas</p>
            </div>

            {/* Novo Ícone (Outro) */}
            <div className="flex flex-col items-center text-white">
              <div
                className="bg-white p-4 rounded-full cursor-pointer"
                onClick={() => navigate("/contrato/avalicoes")}  // Substitua com a rota correspondente
                title="Outro"
              >
                <img src={avaliacoes_icon} alt="Outro Ícone" className="w-12 h-12" />
              </div>
              <p className="mt-2">Avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
