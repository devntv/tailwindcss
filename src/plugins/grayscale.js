import { filterVars } from './filter'

export default function () {
  return function ({ config, matchUtilities, theme, variants }) {
    matchUtilities(
      {
        grayscale: (value) => {
          return {
            '--tw-grayscale': `grayscale(${value})`,
            ...(config('mode') === 'jit' ? { filter: filterVars } : {}),
          }
        },
      },
      {
        values: theme('grayscale'),
        variants: variants('grayscale'),
        type: 'any',
      }
    )
  }
}
