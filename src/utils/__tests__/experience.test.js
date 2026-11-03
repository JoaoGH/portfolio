import { describe, it, expect } from 'vitest';
import { getYearsOfExperience } from '../experience.js';

describe('getYearsOfExperience', () => {
  it('deve calcular corretamente a diferença passando apenas o ano numérico', () => {
    const fixedNow = new Date('2026-11-03T12:00:00Z');
    expect(getYearsOfExperience(2019, fixedNow)).toBe(7);
    expect(getYearsOfExperience(2020, fixedNow)).toBe(6);
    expect(getYearsOfExperience(2026, fixedNow)).toBe(0);
  });

  it('deve usar 2019 como ano padrão caso não seja informado', () => {
    const fixedNow = new Date('2026-11-03T12:00:00Z');
    expect(getYearsOfExperience(undefined, fixedNow)).toBe(7);
  });

  it('deve calcular anos completos considerando mês e dia de início', () => {
    const fixedNow = new Date('2026-06-15T12:00:00Z');
    // Aniversário em janeiro já passou em junho -> 7 anos
    expect(getYearsOfExperience('2019-01-10', fixedNow)).toBe(7);
    // Aniversário em dezembro ainda não chegou em junho -> 6 anos
    expect(getYearsOfExperience('2019-12-01', fixedNow)).toBe(6);
  });

  it('deve retornar 0 para datas futuras ou inválidas', () => {
    const fixedNow = new Date('2026-11-03T12:00:00Z');
    expect(getYearsOfExperience(2030, fixedNow)).toBe(0);
    expect(getYearsOfExperience('data-invalida', fixedNow)).toBe(0);
  });
});
