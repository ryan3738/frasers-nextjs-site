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
      background: 'hsl(var(--background-color))',
      foreground: 'hsl(var(--white-color))',
      primary: {
        DEFAULT: 'hsl(var(--primary-color))',
        foreground: 'hsl(var(--black-color))'
      }
    }
  }
};
export const plugins = [];
