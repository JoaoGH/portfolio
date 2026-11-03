import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { ThemeToggle } from '../ThemeToggle.jsx';

describe('ThemeToggle Component', () => {
  let mediaQueryListeners = [];

  const setupMatchMedia = (matches = false) => {
    mediaQueryListeners = [];
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches,
        media: query,
        onchange: null,
        addListener: vi.fn((listener) => mediaQueryListeners.push(listener)),
        removeListener: vi.fn((listener) => {
          mediaQueryListeners = mediaQueryListeners.filter((l) => l !== listener);
        }),
        addEventListener: vi.fn((event, listener) => {
          if (event === 'change') mediaQueryListeners.push(listener);
        }),
        removeEventListener: vi.fn((event, listener) => {
          if (event === 'change') {
            mediaQueryListeners = mediaQueryListeners.filter((l) => l !== listener);
          }
        }),
        dispatchEvent: vi.fn(),
      })),
    });
  };

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    document.head.innerHTML = '<meta name="color-scheme" content="light dark" />';
    setupMatchMedia(false);
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('deve respeitar a preferência do sistema operacional (light) no primeiro load sem localStorage', () => {
    setupMatchMedia(false);
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(button).toHaveAttribute('aria-label', 'navbar.item.theme.dark');
  });

  it('deve respeitar a preferência do sistema operacional (dark) no primeiro load sem localStorage', () => {
    setupMatchMedia(true);
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(button).toHaveAttribute('aria-label', 'navbar.item.theme.light');
  });

  it('deve inicializar com o tema salvo no localStorage, ignorando a preferência do SO', () => {
    localStorage.setItem('theme', 'dark');
    setupMatchMedia(false); // SO prefere light, mas localStorage tem dark

    render(<ThemeToggle />);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'navbar.item.theme.light');
  });

  it('deve alternar o tema ao clicar, salvar escolha no localStorage e atualizar o DOM', () => {
    setupMatchMedia(false);
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Clica para ativar modo escuro
    fireEvent.click(button);

    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    const meta = document.querySelector('meta[name="color-scheme"]');
    expect(meta?.content).toBe('dark');

    // Clica novamente para voltar ao modo claro
    fireEvent.click(button);

    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(meta?.content).toBe('light');
  });

  it('deve reagir a mudanças no matchMedia do SO quando não há preferência forçada no localStorage', () => {
    setupMatchMedia(false);
    render(<ThemeToggle />);

    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Dispara mudança no matchMedia simulando SO mudando para dark mode
    act(() => {
      mediaQueryListeners.forEach((listener) => listener({ matches: true }));
    });

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('não deve ser afetado por mudanças no SO se o usuário já tiver forçado a escolha no localStorage', () => {
    setupMatchMedia(false);
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    // Usuário força o modo escuro
    fireEvent.click(button);
    expect(localStorage.getItem('theme')).toBe('dark');

    // SO emite mudança para light mode
    act(() => {
      mediaQueryListeners.forEach((listener) => listener({ matches: false }));
    });

    // Como o usuário forçou dark, deve continuar dark
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('deve sincronizar quando o tema for alterado em outra aba via evento storage', () => {
    setupMatchMedia(false);
    render(<ThemeToggle />);

    expect(document.documentElement.classList.contains('dark')).toBe(false);

    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: 'theme',
          newValue: 'dark',
        })
      );
    });

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('deve renderizar a versão mobile com as classes apropriadas', () => {
    render(<ThemeToggle mobile={true} />);

    const button = screen.getByRole('button');
    expect(button.className).toContain('hover:bg-white/20');
  });
});
