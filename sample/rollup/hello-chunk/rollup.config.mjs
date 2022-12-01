export default [
  {
    input: 'src/main.js',
    output: [
      {
        dir: 'dist',
        format: 'es'
      }
    ]
  },
  {
    input: 'src/main2.js',
    output: [
      {
        dir: 'dist',
        format: 'cjs'
      }
    ]
  }
];
