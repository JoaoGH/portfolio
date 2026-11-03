import { useState, useEffect, useCallback } from 'react';

export const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  try {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

export const applyThemeToDOM = (theme) => {
  if (typeof document === 'undefined') return;
  const isDark = theme === 'dark';
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) {
    meta.content = theme;
  }
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  const applyTheme = useCallback((newTheme) => {
    setTheme(newTheme);
    applyThemeToDOM(newTheme);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('app-theme-change', { detail: newTheme }));
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const current = typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
    const nextTheme = current === 'dark' ? 'light' : 'dark';

    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // Ignore localStorage write errors (e.g. storage disabled/blocked)
    }

    const updateDOM = () => {
      applyTheme(nextTheme);
    };

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (
      !prefersReducedMotion &&
      typeof document !== 'undefined' &&
      typeof document.startViewTransition === 'function'
    ) {
      document.startViewTransition(() => {
        updateDOM();
      });
    } else {
      updateDOM();
    }
  }, [applyTheme]);

  useEffect(() => {
    // Sincroniza o DOM com o tema inicial no client apenas se necessário
    if (typeof document !== 'undefined') {
      const isDomDark = document.documentElement.classList.contains('dark');
      const domTheme = isDomDark ? 'dark' : 'light';
      if (domTheme !== theme) {
        applyThemeToDOM(theme);
      }
    }

    // Escuta evento customizado para sincronizar todos os componentes na mesma página em tempo real
    const handleAppThemeChange = (e) => {
      setTheme(e.detail);
    };
    window.addEventListener('app-theme-change', handleAppThemeChange);

    // Escuta alterações na preferência do sistema operacional
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = (e) => {
      try {
        const stored = localStorage.getItem('theme');
        // Apenas segue a mudança do SO se o usuário não tiver forçado uma preferência
        if (!stored) {
          const newTheme = e.matches ? 'dark' : 'light';
          applyTheme(newTheme);
        }
      } catch {
        const newTheme = e.matches ? 'dark' : 'light';
        applyTheme(newTheme);
      }
    };

    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else if (mediaQuery?.addListener) {
      mediaQuery.addListener(handleMediaChange);
    }

    // Escuta evento de storage para sincronizar entre diferentes abas
    const handleStorageChange = (e) => {
      if (e.key === 'theme') {
        if (e.newValue === 'dark' || e.newValue === 'light') {
          applyTheme(e.newValue);
        } else if (!e.newValue) {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
          applyTheme(systemTheme);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('app-theme-change', handleAppThemeChange);
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else if (mediaQuery?.removeListener) {
        mediaQuery.removeListener(handleMediaChange);
      }
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [applyTheme, theme]);

  return { theme, toggleTheme, isDark: theme === 'dark' };
};
