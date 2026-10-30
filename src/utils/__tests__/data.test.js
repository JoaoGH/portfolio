import { describe, it, expect } from 'vitest';
import {
  SUPPORTED_LANGUAGES,
  MENU_LINKS,
  STATS,
  SKILLS_TAB,
  SKILLS,
} from '../data.js';

describe('Data Constants (utils/data.js)', () => {
  describe('SUPPORTED_LANGUAGES', () => {
    it('deve conter as linguagens suportadas com propriedades obrigatórias', () => {
      expect(SUPPORTED_LANGUAGES).toHaveLength(2);
      SUPPORTED_LANGUAGES.forEach((lang) => {
        expect(lang).toHaveProperty('code');
        expect(lang).toHaveProperty('name');
        expect(lang).toHaveProperty('country_code');
      });
    });

    it('deve incluir os idiomas inglês e português', () => {
      const codes = SUPPORTED_LANGUAGES.map((l) => l.code);
      expect(codes).toContain('en');
      expect(codes).toContain('pt_br');
    });
  });

  describe('MENU_LINKS', () => {
    it('deve possuir 5 seções de navegação com ids e links válidos', () => {
      expect(MENU_LINKS).toHaveLength(5);
      MENU_LINKS.forEach((item) => {
        expect(item).toHaveProperty('id');
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('to');
        expect(typeof item.offset).toBe('number');
      });
    });
  });

  describe('STATS', () => {
    it('deve possuir 4 itens de métricas com valores numéricos válidos', () => {
      expect(STATS).toHaveLength(4);
      STATS.forEach((stat) => {
        expect(stat).toHaveProperty('count');
        expect(stat).toHaveProperty('label');
        expect(Number(stat.count)).toBeGreaterThan(0);
      });
    });
  });

  describe('SKILLS e SKILLS_TAB', () => {
    it('deve conter as categorias de abas esperadas', () => {
      const values = SKILLS_TAB.map((t) => t.value);
      expect(values).toContain('all');
      expect(values).toContain('backend');
      expect(values).toContain('frontend');
      expect(values).toContain('data');
      expect(values).toContain('devops');
    });

    it('cada habilidade deve ter nome, ícone, tipo e progresso entre 0 e 100', () => {
      expect(SKILLS.length).toBeGreaterThan(0);
      SKILLS.forEach((skill) => {
        expect(skill).toHaveProperty('name');
        expect(skill).toHaveProperty('type');
        expect(skill).toHaveProperty('icon');
        expect(skill.progress).toBeGreaterThanOrEqual(0);
        expect(skill.progress).toBeLessThanOrEqual(100);
      });
    });

    it('deve ser possível filtrar as habilidades por categoria', () => {
      const backendSkills = SKILLS.filter((s) => s.type === 'backend');
      expect(backendSkills.length).toBeGreaterThan(0);
      backendSkills.forEach((s) => expect(s.type).toBe('backend'));

      const frontendSkills = SKILLS.filter((s) => s.type === 'frontend');
      expect(frontendSkills.length).toBeGreaterThan(0);
      frontendSkills.forEach((s) => expect(s.type).toBe('frontend'));
    });
  });
});
