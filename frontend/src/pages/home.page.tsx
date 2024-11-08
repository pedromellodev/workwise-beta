import { useEffect, useState } from "react";
import { useAuthContext } from "../cli/AuthContext";
import workwise_logo from "../assets/workwise_logo.svg";
import contratos_icon from "../assets/contratos_icon.svg";
import banco_horas_icon from "../assets/banco_horas_icon.svg"
import avaliacoes_icon from "../assets/avaliacoes_icon.svg"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bell, ChevronLeft, Edit } from "lucide-react";


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

    // header
    <div className="h-screen bg-gradient-to-b from-purple-600 to-blue-400 overflow-hidden flex flex-col items-center">
      <div className="w-full p-3 flex justify-between items-center bg-purple-400">
      <img src={workwise_logo} alt="WorkWise Logo" className="h-12" />
      <Bell className="w-[33px] h-[35px]" />
    </div>

      {/* Temperatura/Data/Dia da semana */}
       <div className="absolute top-20 right-4 text-white text-right">
       <div className="w-[125px] h-[98.44px] flex-col justify-start items-center gap-[3px] inline-flex">
            <div className="justify-start items-center gap-[7px] inline-flex">
              <div className="w-[42px] h-[42px] relative" /> 
              {/* colocar icon de temperatura */}
              <div className="w-[38px] h-[25px] text-center text-white text-2xl  leading-[28.80px]">{weatherData.temperature}</div>
            </div>
            <div className="h-[53.44px] flex-col justify-start items-center flex">
              <div className="h-[26.72px] text-center text-white text-xl">{weatherData.date}</div>
              <div className="h-[26.72px] text-center text-white text-base">{weatherData.weekday}</div>
            </div>
        </div>
      </div> 

      <div className="flex w-5/6 mt-8 mx-auto flex-col gap-10">
        {/* Conteúdo principal */}
          <div className="flex w-5/6 mt-8 gap-8">
              <ul>
              <h1 className="text-3xl font-semibold text-white">
                Bem-vindo(a) de volta, {user ? user.username : "Usuário"}!
              </h1>
              <p className="text-base text-gray-200">Já conferiu suas notificações?</p>
              </ul>
          </div>
          <div className="w-[600px] h-[800px] bg-white border border-[#1f1f1f] flex-col justify-start items-center gap-[34px] inline-flex">
              <div className="self-stretch h-20 px-[107px] py-[21px] bg-purple-500 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-[#1f1f1f] text-xl font-normal font-['Alata'] leading-[30px]">Quadro de Lembretes</div>
              </div>
          </div>
          </div>

          {/* Utilizados com Frequência */}
      <div className="flex flex-col w-1/2 items-center justify-end mb-4">
        <h2 className="font-bold text-black mb-4">Utilizados com frequência</h2>
          <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-white" >
              <div
                className="bg-white p-4 rounded-full cursor-pointer"
                onClick={() => navigate("/banco-horas")} 
                title="Banco de Horas">
                <img src={banco_horas_icon} alt="Banco de Horas" className="w-12 h-12" />
              </div>
              <p className="mt-2">Banco de Horas</p>
            </div>
          </div>
      </div>

      
          {/* Utilizados com Frequência */}
          <div className="flex flex-col w-1/2 items-center justify-end mb-4">
        <h2 className="font-bold text-black mb-4">Utilizados com frequência</h2>
          <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-white" >
              <div
                className="bg-white p-4 rounded-full cursor-pointer"
                onClick={() => navigate("/banco-horas")} 
                title="Banco de Horas">
                <img src={banco_horas_icon} alt="Banco de Horas" className="w-12 h-12" />
              </div>
              <p className="mt-2">Banco de Horas</p>
            </div>
          </div>
      </div>

      </div>
  );
}



        //     {/* Novo Ícone (Outro) */}
        //     <div className="flex flex-col items-center text-white">
        //       <div
        //         className="bg-white p-4 rounded-full cursor-pointer"
        //         onClick={() => navigate("/contratos/detalhes")}  // Substitua com a rota correspondente
        //         title="Outro"
        //       >
        //         <img src={avaliacoes_icon} alt="Outro Ícone" className="w-12 h-12" />
        //       </div>
        //       <p className="mt-2">Avaliações</p>
        //     </div>
        //   </div>
        // </div>


          // <div className="bg-white shadow-lg rounded-lg p-6 mt-4" style={{ height: "350px" }}>
          //   <h2 className="text-lg font-bold text-purple-600">Quadro de Lembretes</h2>
          //   <ul className="mt-4 space-y-4">
          //     <li className="flex justify-between text-gray-700">
          //       <span>Hoje:</span>
          //       <span>Reunião Workwise</span>
          //       <span>10:00</span>
          //     </li>
          //   </ul>
