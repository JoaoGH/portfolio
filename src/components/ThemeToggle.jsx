import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme.js';

export const ThemeToggle = ({ mobile = false }) => {
  const { toggleTheme, isDark } = useTheme();
  const { t } = useTranslation();

  const ariaLabel = isDark
    ? t('navbar.item.theme.light', 'Switch to light theme')
    : t('navbar.item.theme.dark', 'Switch to dark theme');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`p-2 rounded-lg cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-zinc-200 ${
        mobile ? 'hover:bg-white/20' : 'hover:bg-slate-100 dark:hover:bg-zinc-800'
      }`}
    >
      {isDark ? (
        <FaSun className="w-4 h-4 text-zinc-200 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <FaMoon className="w-4 h-4 text-slate-700 dark:text-zinc-200 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
