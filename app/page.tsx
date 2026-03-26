"use client";

import { useState } from "react";
import { Folder } from "lucide-react";

type MissionResponse = {
  message: string;
};

const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export default function Home() {
  const [statusText, setStatusText] = useState("_");
  const [isLoading, setIsLoading] = useState(false);

  const handleContact = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);

      setStatusText("Enviando mensagem...");
      await delay(1200);

      setStatusText("Recebendo resposta...");

      const [response] = await Promise.all([
        fetch(`/api/mission`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        }),
        delay(1200)
      ]);

      if (!response.ok) {
        throw new Error("Erro na API");
      }

      const data: MissionResponse = await response.json();

      setStatusText(`Mensagem recebida: ${data.message}`);
    } catch {
      setStatusText("Falha ao comunicar com a missão");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/unsplashspace.jpg')" }}
    >
      <h1 className="fixed top-12 text-white text-4xl font-bold">
        Missão Espacial
      </h1>

      <div className="w-[750px] bg-[#262629] rounded-[24px] mt-10 px-8 py-8 space-y-4">
        <p className="text-white text-[13px] font-semibold">
          Upload de Arquivo
        </p>

        <div className="flex items-center gap-2 bg-[#434347] rounded-[7px] w-fit py-[10px] px-[15px]">
          <div className="bg-[#696970] px-[10px] py-[10px] rounded-[6px]">
            <Folder className="text-white" />
          </div>

          <p className="text-white text-[13px] font-semibold">
            MensagemDaTerra.mp4
          </p>
        </div>

        <button
          onClick={handleContact}
          disabled={isLoading}
          className="transition-opacity duration-300 text-white text-[13px] font-semibold py-2 px-3 bg-green-700 rounded-[8px] hover:opacity-80 disabled:opacity-50"
        >
          Fazer contato
        </button>
      </div>

      <div className="w-[750px] h-[300px] bg-[#2f2e33] mt-6 border border-[#8f8f8f] px-[10px] py-[10px]">
        <p className="text-white text-[13px] font-semibold">
          {statusText}
        </p>
      </div>
    </div>
  );
}