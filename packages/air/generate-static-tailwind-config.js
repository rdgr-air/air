const prettier = require('prettier')
const fs = require('fs')

const resolveConfig = require('tailwindcss/resolveConfig')
const tailwind = require('./tailwind.config')

/** @type {import('tailwindcss').Config} */
const tailwindConfig = resolveConfig(tailwind)

const write = (fileName, fileContent) => {
  const fmt = (str) => prettier.format(str, { parser: 'babel', singleQuote: true, semi: false })
  fmt(fileContent).then((res) => {
    fs.writeFileSync(fileName, res)
  })
}

write(
  './packages/ui/src/lib/tailwind.static.ts',
  `// DO NOT EDIT:
export default ${JSON.stringify(tailwindConfig)}
`,
)
