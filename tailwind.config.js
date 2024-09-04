/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export const content = [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}'
];
export const theme = {
  extend: {
    colors: {
      ...colors,
      background: 'hsl(var(--background-color-tw))',
      foreground: 'hsl(var(--white-color-tw))',
      surface: 'hsl(var(--surface-color-tw))',
      primary: {
        DEFAULT: 'var(--primary-color-tw)',
        foreground: 'hsl(var(--black-color-tw))'
      }
    }
  }
};
export const plugins = [];
