import React, { useState } from "react";

export function AddEmployeeModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({ name: "", cpf: "", status: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Adicionar Novo Funcionário</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="w-full border rounded px-3 py-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            className="w-full border rounded px-3 py-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            className="w-full border rounded px-3 py-2"
            onChange={handleChange}
          />
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
