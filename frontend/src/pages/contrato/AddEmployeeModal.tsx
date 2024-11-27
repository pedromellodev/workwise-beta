import React, { useState } from "react";

export function AddEmployeeModal({ onClose, onSubmit }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    rg: "",
    idade: "",
    dt_nasc: "",
    telefone: "",
    celular: "",
    pis: "",
    tipoContrato: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    distrito: "",
    complemento: "",
    escola: "",
    cnpj: "",
    cep_ensino: "",
    endereco: "",
    telefone_ensino: "",
    cursando: "",
    periodo: "",
    termino: "",
    banco: "",
    agencia: "",
    conta: "",
    tipo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              value={formData.cpf}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              name="rg"
              placeholder="RG"
              value={formData.rg}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              name="idade"
              placeholder="Idade"
              value={formData.idade}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
             <input
              type="text"
              name="dt_nasc"
              placeholder="Data de nascimento"
              value={formData.dt_nasc}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              name="celular"
              placeholder="Celular"
              value={formData.celular}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
              <select
              name="tipoContrato"
              value={formData.tipoContrato}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Selecione o tipo de contrato</option>
              <option value="CLT">CLT</option>
              <option value="Estagiario">Estagiário</option>
            </select>
            {formData.tipoContrato === "CLT" && (
              <input
                type="text"
                name="pis"
                placeholder="PIS"
                value={formData.pis || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            )}
          </>
        );
      case 2:
        return (
          <>
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              value={formData.cep}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              name="rua"
              placeholder="Rua"
              value={formData.rua}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              name="numero"
              placeholder="Número"
              value={formData.numero}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              name="bairro"
              placeholder="Bairro"
              value={formData.bairro}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              name="distrito"
              placeholder="Distrito"
              value={formData.distrito}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              name="complemento"
              placeholder="Complemento"
              value={formData.cep_ensino}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </>
        );
        case 3:
        return (
          <>
              <input
              type="text"
              name="escola"
              placeholder="Escola"
              value={formData.escola}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
                        <input
              type="text"
              name="cnpj"
              placeholder="CNPJ"
              value={formData.cnpj}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
                        <input
              type="text"
              name="cep"
              placeholder="CEP"
              value={formData.complemento}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
                        <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={formData.endereco}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
                        <input
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone_ensino}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
                        <input
              type="text"
              name="cursando"
              placeholder="Cursando"
              value={formData.cursando}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
                        <input
              type="text"
              name="periodo"
              placeholder="Ano/Semestre"
              value={formData.periodo}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
                        <input
              type="text"
              name="termino"
              placeholder="Termino"
              value={formData.termino}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </>
        );
        case 4:
          return (
            <>
            <select
            name="banco"
            value={formData.banco}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2">
            <option value="">Selecione o </option>
            <option value="bradesco">Bradesco</option>
          </select>
            <input
              type="text"
              name="agencia"
              placeholder="Agência"
              value={formData.agencia}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
                        <input
              type="text"
              name="conta"
              placeholder="Conta"
              value={formData.conta}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
                        <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2">
            <option value="">Selecione o Tipo de conta</option>
            <option value="bradesco">Poupança</option>
            <option value="bradesco">Conta-Corrente</option>
            <option value="bradesco">Salário</option>
          </select>
            </>
          );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Adicionar Novo Funcionário</h2>
        <div className="space-y-4">
          {renderStep()}
        </div>
        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={prevStep}
            >
              Anterior
            </button>
          )}
          {step < 3 ? (
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded ml-auto"
              onClick={nextStep}
            >
              Próximo
            </button>
          ) : (
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded ml-auto"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}