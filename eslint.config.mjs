import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,

			}
		}
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			'react/react-in-jsx-scope': 'off',
			'quotes': [2, 'single', { 'avoidEscape': true }],
			'semi': ['error', 'never'],
			'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
			'@typescript-eslint/no-require-imports': [0, 'never'],
			'indent': ['error', 'tab'],
			'object-curly-spacing': ['error', 'always'],
		}
	},
]