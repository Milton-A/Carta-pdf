import React from 'react';
import { useForm } from 'react-hook-form';

const FormularioCarta = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label>
        Nome:
        <input {...register('nome')} />
      </label>
      <label>
        Endereço:
        <input {...register('endereco')} />
      </label>
      <button type="submit">Gerar PDF</button>
    </form>
  );
};

export default FormularioCarta;