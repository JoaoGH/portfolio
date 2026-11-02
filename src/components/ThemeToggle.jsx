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
      className={`p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 dark:text-gray-200 ${
        mobile ? 'hover:bg-white/20' : 'hover:bg-purple-50 dark:hover:bg-gray-800'
      }`}
    >
      {isDark ? (
        <FaSun className="w-4 h-4 text-gray-200 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <FaMoon className="w-4 h-4 text-gray-700 dark:text-gray-200 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
