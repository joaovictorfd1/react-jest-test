import { render, screen } from '@testing-library/react';
import Formulario from './index';
import userEvent from '@testing-library/user-event';

describe('Deve renderizar um campo de input', () => {
  test('no documento', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeInTheDocument();
  });

  test('com o type number', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test('que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '50');
    expect(campoTexto).toHaveValue(50);
  });
});

test('Deve ser possível selecionar uma opção do elemento <select/>', () => {
  render(<Formulario />); // renderiza o componente
  const select = screen.getByRole('combobox'); // faz a consulta do elemento select
  userEvent.selectOptions(select, ['Depósito']); // simula a ação de selecionar uma opção do select

  expect(
    screen.getByRole('option', { name: 'Selecione um tipo de transação' })
      .selected
  ).toBe(false); // verifica se a opção de selecionar um tipo de transação não foi selecionada
  expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(
    true
  ); // verifica se a opção de depósito foi selecionada
});