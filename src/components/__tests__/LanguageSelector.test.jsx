import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageSelector } from '../LanguageSelector.jsx';

describe('LanguageSelector Component', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('deve renderizar o seletor de idiomas', () => {
    render(<LanguageSelector mobile={false} />);
    const button = screen.getByRole('button', { name: /navbar\.item\.language\.hint/i });
    expect(button).toBeInTheDocument();
  });

  it('deve abrir o dropdown de idiomas ao clicar no botão', () => {
    render(<LanguageSelector mobile={false} />);
    const button = screen.getByRole('button', { name: /navbar\.item\.language\.hint/i });

    // Inicialmente dropdown fechado
    expect(screen.queryByText('English')).not.toBeInTheDocument();

    // Clica para abrir
    fireEvent.click(button);
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Português')).toBeInTheDocument();
  });

  it('deve salvar o idioma selecionado no localStorage ao escolher uma opção', () => {
    render(<LanguageSelector mobile={false} />);
    const button = screen.getByRole('button', { name: /navbar\.item\.language\.hint/i });

    fireEvent.click(button);
    const ptButton = screen.getByText('Português');
    fireEvent.click(ptButton);

    expect(localStorage.getItem('userLanguage')).toBe('pt_br');
    // Dropdown deve fechar após a seleção
    expect(screen.queryByText('Português')).not.toBeInTheDocument();
  });
});
