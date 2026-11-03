import { describe, it, expect, beforeEach, vi } from 'vitest';
import { normalizeLanguage, getInitialLanguage, updateHtmlLang, LANGUAGE_STORAGE_KEY } from '../i18n.js';

describe('i18n utility (utils/i18n.js)', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.restoreAllMocks();
        document.documentElement.lang = '';
    });

    it('deve exportar a chave correta de armazenamento no localStorage', () => {
        expect(LANGUAGE_STORAGE_KEY).toBe('userLanguage');
    });

    describe('normalizeLanguage', () => {
        it('deve normalizar variantes de português para pt_br', () => {
            expect(normalizeLanguage('pt-BR')).toBe('pt_br');
            expect(normalizeLanguage('pt_br')).toBe('pt_br');
            expect(normalizeLanguage('pt')).toBe('pt_br');
            expect(normalizeLanguage('pt-PT')).toBe('pt_br');
            expect(normalizeLanguage('PT-BR')).toBe('pt_br');
            expect(normalizeLanguage('PT')).toBe('pt_br');
        });

        it('deve normalizar inglês para en', () => {
            expect(normalizeLanguage('en')).toBe('en');
            expect(normalizeLanguage('en-US')).toBe('en');
            expect(normalizeLanguage('en-GB')).toBe('en');
            expect(normalizeLanguage('EN-US')).toBe('en');
        });

        it('deve fazer fallback para en quando receber outros idiomas', () => {
            expect(normalizeLanguage('es')).toBe('en');
            expect(normalizeLanguage('es-ES')).toBe('en');
            expect(normalizeLanguage('fr')).toBe('en');
            expect(normalizeLanguage('fr-FR')).toBe('en');
            expect(normalizeLanguage('de')).toBe('en');
            expect(normalizeLanguage('ja')).toBe('en');
        });

        it('deve fazer fallback para en quando receber valores nulos ou vazios', () => {
            expect(normalizeLanguage(null)).toBe('en');
            expect(normalizeLanguage(undefined)).toBe('en');
            expect(normalizeLanguage('')).toBe('en');
        });
    });

    describe('getInitialLanguage', () => {
        it('prioridade 1: deve ler o localStorage quando o usuário já tiver uma escolha prévia', () => {
            localStorage.setItem(LANGUAGE_STORAGE_KEY, 'pt_br');
            vi.spyOn(navigator, 'language', 'get').mockReturnValue('en-US');

            const result = getInitialLanguage();
            expect(result).toBe('pt_br');
            expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('pt_br');
        });

        it('prioridade 2 e 3: se localStorage vazio e navegador pt-BR, deve definir pt_br e persistir no localStorage', () => {
            vi.spyOn(navigator, 'language', 'get').mockReturnValue('pt-BR');

            const result = getInitialLanguage();
            expect(result).toBe('pt_br');
            expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('pt_br');
        });

        it('prioridade 2 e 3: se localStorage vazio e navegador em outro idioma (ex: es-ES), deve aplicar fallback para en e persistir', () => {
            vi.spyOn(navigator, 'language', 'get').mockReturnValue('es-ES');

            const result = getInitialLanguage();
            expect(result).toBe('en');
            expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en');
        });

        it('prioridade 2 e 3: se localStorage vazio e navegador sem idioma definido, deve aplicar fallback para en e persistir', () => {
            vi.spyOn(navigator, 'language', 'get').mockReturnValue(undefined);

            const result = getInitialLanguage();
            expect(result).toBe('en');
            expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en');
        });
    });

    describe('updateHtmlLang', () => {
        it('deve definir lang="pt-BR" quando o idioma for pt_br', () => {
            updateHtmlLang('pt_br');
            expect(document.documentElement.lang).toBe('pt-BR');
        });

        it('deve definir lang="en" quando o idioma for en ou outro', () => {
            updateHtmlLang('en');
            expect(document.documentElement.lang).toBe('en');
        });
    });
});
