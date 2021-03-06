import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: './lib/index.cjs',
      format: 'cjs',
    },
    {
      file: './lib/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' })],
  external: [
    '@open-tech-world/es-glob',
    '@open-tech-world/es-utils',
    'path',
    'fs',
  ],
};
