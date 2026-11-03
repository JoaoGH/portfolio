import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { ParticleText } from '../ParticleText.jsx';

// Mock do hook useTheme para simular modo claro e escuro
const mockUseTheme = vi.fn();
vi.mock('../../hooks/useTheme.js', () => ({
  useTheme: () => mockUseTheme(),
}));

describe('ParticleText Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseTheme.mockReturnValue({
      theme: 'light',
      isDark: false,
    });
  });

  it('deve renderizar no modo diurno (bg-purple-50) quando o tema for claro', () => {
    mockUseTheme.mockReturnValue({
      theme: 'light',
      isDark: false,
    });

    const { container } = render(<ParticleText text="< / >" />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();

    const wrapper = canvas?.parentElement;
    expect(wrapper?.className).toContain('bg-purple-50');
    expect(wrapper?.className).not.toContain('bg-gray-900');
  });

  it('deve renderizar no modo noturno (bg-gray-900) quando o tema for escuro', () => {
    mockUseTheme.mockReturnValue({
      theme: 'dark',
      isDark: true,
    });

    const { container } = render(<ParticleText text="< / >" />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();

    const wrapper = canvas?.parentElement;
    expect(wrapper?.className).toContain('bg-gray-900');
    expect(wrapper?.className).not.toContain('bg-purple-50');
  });

  it('deve alternar a cor do container e das partículas em tempo real ao mudar o tema', () => {
    mockUseTheme.mockReturnValue({
      theme: 'light',
      isDark: false,
    });

    const { container, rerender } = render(<ParticleText text="< / >" />);
    const canvas = container.querySelector('canvas');
    const wrapper = canvas?.parentElement;
    expect(wrapper?.className).toContain('bg-purple-50');

    // Simula troca de tema para dark
    mockUseTheme.mockReturnValue({
      theme: 'dark',
      isDark: true,
    });

    rerender(<ParticleText text="< / >" />);
    expect(wrapper?.className).toContain('bg-gray-900');
    expect(wrapper?.className).not.toContain('bg-purple-50');
  });

  it('deve respeitar a prop defaultMode caso seja informada explicitamente', () => {
    mockUseTheme.mockReturnValue({
      theme: 'dark',
      isDark: true,
    });

    // Mesmo com isDark=true, defaultMode='day' deve prevalecer
    const { container } = render(<ParticleText text="< / >" defaultMode="day" />);
    const canvas = container.querySelector('canvas');
    const wrapper = canvas?.parentElement;

    expect(wrapper?.className).toContain('bg-gray-900');
  });

  it('deve limpar requestAnimationFrame e listener de resize ao desmontar', () => {
    const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame');
    const removeListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = render(<ParticleText text="< / >" />);
    unmount();

    expect(cancelSpy).toHaveBeenCalled();
    expect(removeListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});
