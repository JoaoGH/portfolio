import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from '../Tabs.jsx';

describe('Tabs Component', () => {
  const mockTabs = [
    { id: 1, label: 'skills.tabs.item.1', value: 'all' },
    { id: 2, label: 'skills.tabs.item.2', value: 'backend' },
    { id: 3, label: 'skills.tabs.item.3', value: 'frontend' },
  ];

  it('deve renderizar os botões das abas fornecidas', () => {
    const handleChange = vi.fn();
    render(<Tabs tabList={mockTabs} activeTab="all" onChange={handleChange} />);

    expect(screen.getByText('skills.tabs.item.1.label')).toBeInTheDocument();
    expect(screen.getByText('skills.tabs.item.2.label')).toBeInTheDocument();
    expect(screen.getByText('skills.tabs.item.3.label')).toBeInTheDocument();
  });

  it('deve chamar a função onChange com o valor correto ao clicar em uma aba', () => {
    const handleChange = vi.fn();
    render(<Tabs tabList={mockTabs} activeTab="all" onChange={handleChange} />);

    const backendButton = screen.getByText('skills.tabs.item.2.label');
    fireEvent.click(backendButton);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('backend');
  });

  it('deve aplicar estilo ativo na aba selecionada', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <Tabs tabList={mockTabs} activeTab="all" onChange={handleChange} />
    );

    const allButton = screen.getByText('skills.tabs.item.1.label');
    expect(allButton.className).toContain('text-white');

    rerender(<Tabs tabList={mockTabs} activeTab="backend" onChange={handleChange} />);
    expect(screen.getByText('skills.tabs.item.2.label').className).toContain('text-white');
  });
});
