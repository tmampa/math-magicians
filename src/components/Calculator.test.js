import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => { 
  test('dislays the clicked number', () => {
    render(<Calculator />);

    const button = screen.getByText('2');
    const resultPar = screen.getByRole('none');
    fireEvent.click(button);
    expect(resultPar.textContent).toBe('2');
  });

  test('displays operation clicked', () => {
    render(<Calculator />);

    const button = screen.getByText('+');
    const resultPar = screen.getByRole('none');
    fireEvent.click(button);
    expect(resultPar.textContent).toBe('0+');
  });

  test('displays correct summation', () => {
    render(<Calculator />);

    const button = screen.getByText('2');
    const resultPar = screen.getByRole('none');
    const button2 = screen.getByText('+');
    const button3 = screen.getByText('3');
    const button4 = screen.getByText('=');
    fireEvent.click(button);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(button4);
    expect(resultPar.textContent).toBe('5');
  });
 });