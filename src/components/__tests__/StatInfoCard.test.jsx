import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatInfoCard } from '../StatInfoCard.jsx';

describe('StatInfoCard Component', () => {
  it('deve renderizar o número da contagem e o rótulo traduzido', () => {
    render(<StatInfoCard count="10" label="stats.item.2" />);

    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('stats.item.2.label')).toBeInTheDocument();
  });

  it('deve renderizar o ícone e o rótulo traduzido quando icon for fornecido', () => {
    const MockIcon = () => <svg data-testid="mock-icon" />;
    render(<StatInfoCard icon={MockIcon} label="stats.item.2" />);

    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    expect(screen.getByText('stats.item.2.label')).toBeInTheDocument();
  });
});
