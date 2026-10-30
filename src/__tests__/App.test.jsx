import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../App.jsx';

describe('App Component', () => {
  it('deve renderizar a aplicação inteira sem lançar erros', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();

    // Valida que o rodapé e elementos principais estão presentes no DOM
    const footer = container.querySelector('#footer');
    expect(footer).toBeInTheDocument();
  });
});
