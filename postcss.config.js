module.exports = {
  plugins: [
    [
      '@csstools/postcss-global-data',
      {
        files: ['src/once-ui/styles/breakpoints.scss']
      }
    ],
    'postcss-custom-media',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
<<<<<<< HEAD
    ],
    "@tailwindcss/postcss",
||||||| parent of 8c6858e (revert: "build: setup tailwindcss")
    ],
    '@tailwindcss/postcss'
=======
    ]
>>>>>>> 8c6858e (revert: "build: setup tailwindcss")
  ]
}
