import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

export default [
	{
		input: 'src/index.ts',
		plugins: [
			typescript(),
			commonjs({
                namedExports: {
                    'react-is': ['ForwardRef'],
                    'prop-types': ["elementType"]
                }
            }),
			resolve(),
			terser()
		],
		output: [
			{ file: pkg.main, format: 'cjs', sourcemap: true },
			{ file: pkg.module, format: 'es' },
        ],
        external: ["react", "react-dom"]
	},
];
