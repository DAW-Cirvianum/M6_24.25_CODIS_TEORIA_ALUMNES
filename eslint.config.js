import globals from 'globals'
import pluginJs from '@eslint/js'
import prettier from 'eslint-config-prettier' // Importa la configuració de Prettier

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-console': 'off', // Permet l'ús de console.log
      'no-unused-vars': 'warn', // Avisa quan hi hagi variables no utilitzades
      'prefer-template': 'warn', // Avisa quan no s'utilitzin template literals
    },
  },
  pluginJs.configs.recommended,
  prettier, // Afegeix la configuració de Prettier per evitar conflictes de format
]
