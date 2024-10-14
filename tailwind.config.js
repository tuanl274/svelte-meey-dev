import * as defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Be Vietnam Pro', ...defaultTheme.fontFamily.sans]
    },

    extend: {
      transitionProperty: {
        height: 'max-height'
      },
      colors: {
        primary: 'var(--color-primary)',
        'main-primary': 'var(--color-main-primary)',
        'main-secondary': 'var(--color-main-secondary)',

        // primary
        'primary-900': 'var(--color-primary-900)',
        'primary-800': 'var(--color-primary-800)',
        'primary-700': 'var(--color-primary-700)',
        'primary-600': 'var(--color-primary-600)',
        'primary-500': 'var(--color-primary-500)',
        'primary-400': 'var(--color-primary-400)',
        'primary-300': 'var(--color-primary-300)',
        'primary-200': 'var(--color-primary-200)',
        'primary-100': 'var(--color-primary-100)',
        'primary-50': 'var(--color-primary-50)',

        // grey
        'grey-900': 'var(--color-grey-900)',
        'grey-800': 'var(--color-grey-800)',
        'grey-700': 'var(--color-grey-700)',
        'grey-600': 'var(--color-grey-600)',
        'grey-500': 'var(--color-grey-500)',
        'grey-400': 'var(--color-grey-400)',
        'grey-300': 'var(--color-grey-300)',
        'grey-200': 'var(--color-grey-200)',
        'grey-100': 'var(--color-grey-100)',
        'grey-50': 'var(--color-grey-50)',

        // secondary
        'secondary-900': 'var(--color-secondary-900)',
        'secondary-800': 'var(--color-secondary-800)',
        'secondary-700': 'var(--color-secondary-700)',
        'secondary-600': 'var(--color-secondary-600)',
        'secondary-500': 'var(--color-secondary-500)',
        'secondary-400': 'var(--color-secondary-400)',
        'secondary-300': 'var(--color-secondary-300)',
        'secondary-200': 'var(--color-secondary-200)',
        'secondary-100': 'var(--color-secondary-100)',
        'secondary-50': 'var(--color-secondary-50)',

        // secondary
        'success-900': 'var(--color-success-900)',
        'success-800': 'var(--color-success-800)',
        'success-700': 'var(--color-success-700)',
        'success-600': 'var(--color-success-600)',
        'success-500': 'var(--color-success-500)',
        'success-400': 'var(--color-success-400)',
        'success-300': 'var(--color-success-300)',
        'success-200': 'var(--color-success-200)',
        'success-100': 'var(--color-success-100)',
        'success-50': 'var(--color-success-50)',

        // Warning
        'warning-900': 'var(--color-warning-900)',
        'warning-800': 'var(--color-warning-800)',
        'warning-700': 'var(--color-warning-700)',
        'warning-600': 'var(--color-warning-600)',
        'warning-500': 'var(--color-warning-500)',
        'warning-400': 'var(--color-warning-400)',
        'warning-300': 'var(--color-warning-300)',
        'warning-200': 'var(--color-warning-200)',
        'warning-100': 'var(--color-warning-100)',
        'warning-50': 'var(--color-warning-50)',

        // Error
        'error-900': 'var(--color-error-900)',
        'error-800': 'var(--color-error-800)',
        'error-700': 'var(--color-error-700)',
        'error-600': 'var(--color-error-600)',
        'error-500': 'var(--color-error-500)',
        'error-400': 'var(--color-error-400)',
        'error-300': 'var(--color-error-300)',
        'error-200': 'var(--color-error-200)',
        'error-100': 'var(--color-error-100)',
        'error-50': 'var(--color-error-50)',

        'background-opacity-a': {
          '03': 'var(--color-a-03)'
        },

        'background-opacity-b': {
          '08': 'var(--color-b-08)',
          '01': 'var(--color-b-01)'
        },

        'background-opacity-light': {
          50: 'rgba(255, 255, 255, 0.50)'
        },
        //base color
        black: 'var(--color-black)',
        'black-800': 'var(--color-black-800)',
        'black-700': 'var(--color-black-700)',
        'black-600': 'var(--color-black-600)',
        'black-400': 'var(--color-black-400)',
        'black-50': 'var(--color-black-50)',

        white: 'var(--color-white)',
        gray: 'var(--color-gray)',
        light: 'var(--color-light)',

        'stroke-1': 'var(--color-stroke-1)',
        'stroke-2': 'var(--color-stroke-2)',

        'background-0': 'var(--color-background-0)',
        'background-1': 'var(--color-background-1)',
        'background-2': 'var(--color-background-2)',
        'background-3': 'var(--color-background-3)',
        'background-4': 'var(--color-background-4)',
        'background-5': 'var(--color-background-5)',
        'background-6': 'var(--color-background-6)',

        'footer-light': 'var(--color-footer-light)',
        'text-default': 'var(--text-default)',
        breadcrumb: 'var(--color-breadcrumb)',
        'breadcrumb-active': 'var(--color-breadcrumb-active)',
        '3d': 'rgba(16, 24, 40, 0.25)'
      },
      backgroundImage: {
        'card-location':
          'linear-gradient(180deg, rgba(177, 177, 177, 0) 0%, #000000 100%);',
        'card-meey-value':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);'
      },
      boxShadow: {
        preview: '0px 0px 40px rgba(0, 0, 0, 0.06)'
        // 'btn-meey':
        // 	'0px 40px 11px 0px rgba(0, 0, 0, 0.00), 0px 26px 10px 0px rgba(0, 0, 0, 0.01), 0px 14px 9px 0px rgba(0, 0, 0, 0.05), 0px 6px 6px 0px rgba(0, 0, 0, 0.09), 0px 2px 4px 0px rgba(0, 0, 0, 0.10);'
      }
    },
    fontSize: {
      'fs-60': ['3.75rem', 1.4], // 60/130%
      'fs-48': ['3rem', '4rem'], // 48/130%
      'fs-40': ['2.5rem', '3rem'],
      'fs-30': ['1.875rem', '2.375rem'],
      'fs-29': ['1.813rem', '2rem'],
      'fs-32': ['2rem', '2.5rem'],
      'fs-34': ['2.125rem', '2.625rem'],
      'fs-28': ['1.75rem', '2.25rem'],
      'fs-24': ['1.5rem', '2rem'],
      'fs-22': ['1.375rem', '1.875rem'],
      'fs-20': ['1.25rem', '1.75rem'],
      'fs-18': ['1.125rem', '1.625rem'],
      base: ['1rem', 1.5],
      'fs-14': ['0.875rem', '1.375rem'],
      'fs-13': ['0.8125rem', '1.125rem'],
      'fs-12': ['0.75rem', '1rem'],
      'fs-10': ['0.625rem', '1rem'],
      'fs-8': ['0.5rem', '1rem'],
      'fs-inherit': 'inherit'
    },
    screens: {
      ...defaultTheme.screens,
      xs: { max: '575px' },
      sm: { min: '576px' },
      md: { min: '992px' },
      qmd: { min: '768px' },
      lg: { min: '1200px' },
      xl: { min: '1600px' },
      xxl: { min: '1920px' }
    },
    boxShadow: {
      divide: 'inset 0px -1px 0px #ECECEC',
      header: '0px 0.5px 0px #EEEEEE',
      preview: '0px 0px 40px rgba(0, 0, 0, 0.06)',
      none: 'none',
      'top-divide': '0px 0px 20px rgba(0, 0, 0, 0.2)',
      'bottom-divide': '0px 5px 8px rgba(0, 0, 0, 0.1)',
      button: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      breadcrumb: 'inset 0px 0px 1px rgba(0, 0, 0, 0.06)',
      'top-filter':
        '0px 2px 4px 0px rgba(152, 162, 179, 0.20), 0px 1px 2px 0px rgba(152, 162, 179, 0.20)',
      'inset-down': '0px -1px 0px 0px #ECECEC inset'
    },
    maxHeight: {
      'compare-mobile': 'calc(var(--doc-height) - 154px)'
    },
    listStyleType: {
      square: 'square'
    },
    letterSpacing: {
      '007': '0.07px',
      '008': '0.08px',
      '009': '0.09px'
    },
    backdropBlur: {
      '3d': '5.525333404541016px'
    }
  },
  plugins: []
}
