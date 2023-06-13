import {babel} from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";
import url from "@rollup/plugin-url";
import {terser} from "rollup-plugin-terser";

import {createRequire} from "module";
const require = createRequire(import.meta.url);
const packageJson = require("./package.json");
const peerDependencies = Object.keys(packageJson.peerDependencies);
const extensions = [
    '.js', '.jsx', '.ts', '.tsx'
];

export default {
    input: './src/index.ts',
    output: [
        {
            dir: './dist/cjs/',
            format: 'cjs'
        },
        {
            dir: './dist/esm/',
            format: 'esm'
        },
    ],
    plugins: [
        postcss ({
            modules: {
                localsConvention: 'camelCase',
            },
            inject: true,
        }),
        commonjs({
            include: /node_modules/,
            requireReturnsDefault: "auto"
        }),
        resolve({extensions}),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true
        }),
        babel({
            extensions: extensions,
            babelHelpers: 'bundled',
            exclude: ['node_modules/**']
        }),
        url({
            include : [
                '**/*.svg', '**/*.png', '**/*.jp(e)?g', '**/*.gif', '**/*.webp', '**/*.woff2', '**/*.woff',
                '**/*.ttf', '**/*.otf', '**/*.eot'
            ],
            fileName: '[dirname][hash][extname]'
        }),
        terser()
    ],
    external: [
        ...peerDependencies
    ]
}
