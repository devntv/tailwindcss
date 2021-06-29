export let filterVars = [
  'var(--tw-backdrop-blur)',
  'var(--tw-backdrop-brightness)',
  'var(--tw-backdrop-contrast)',
  'var(--tw-backdrop-grayscale)',
  'var(--tw-backdrop-hue-rotate)',
  'var(--tw-backdrop-invert)',
  'var(--tw-backdrop-opacity)',
  'var(--tw-backdrop-saturate)',
  'var(--tw-backdrop-sepia)',
].join(' ')

export default function () {
  return function ({ config, addBase, addUtilities, variants }) {
    if (config('mode') === 'jit') {
      addBase({
        '*, ::before, ::after': {
          '--tw-backdrop-blur': ' ',
          '--tw-backdrop-brightness': ' ',
          '--tw-backdrop-contrast': ' ',
          '--tw-backdrop-grayscale': ' ',
          '--tw-backdrop-hue-rotate': ' ',
          '--tw-backdrop-invert': ' ',
          '--tw-backdrop-opacity': ' ',
          '--tw-backdrop-saturate': ' ',
          '--tw-backdrop-sepia': ' ',
        },
      })
      addUtilities(
        {
          '.backdrop-filter': { 'backdrop-filter': filterVars },
          '.backdrop-filter-none': { 'backdrop-filter': 'none' },
        },
        variants('backdropFilter')
      )
    } else {
      addUtilities(
        {
          '.backdrop-filter': {
            '--tw-backdrop-blur': ' ',
            '--tw-backdrop-brightness': ' ',
            '--tw-backdrop-contrast': ' ',
            '--tw-backdrop-grayscale': ' ',
            '--tw-backdrop-hue-rotate': ' ',
            '--tw-backdrop-invert': ' ',
            '--tw-backdrop-opacity': ' ',
            '--tw-backdrop-saturate': ' ',
            '--tw-backdrop-sepia': ' ',
            'backdrop-filter': filterVars,
          },
          '.backdrop-filter-none': { 'backdrop-filter': 'none' },
        },
        variants('backdropFilter')
      )
    }
  }
}
