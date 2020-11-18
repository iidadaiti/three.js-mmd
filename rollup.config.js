import html from '@rollup/plugin-html'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { minify } from 'html-minifier'
import * as path from 'path'
import { terser } from 'rollup-plugin-terser'

const isProduct = process.env.BUILD !== 'development'

export default {
  input: path.resolve('src', 'index.ts'),
  output: {
    dir: 'public',
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript(),
    isProduct && terser(),
    html({
      attributes: {
        html: { lang: 'ja' }
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0' }
      ],
      title: '原神MMDで遊んでみた',
      async template({ attributes, files, meta, publicPath, title }) {
        const scripts = (files.js || [])
          .map(({ fileName }) => {
            const attrs = html.makeHtmlAttributes(attributes.script)
            return `<script src="${publicPath}${fileName}"${attrs}></script>`
          })
          .join('\n')

        const links = (files.css || [])
          .map(({ fileName }) => {
            const attrs = html.makeHtmlAttributes(attributes.link)
            return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`
          })
          .join('\n')

        const metas = meta
          .map((input) => {
            const attrs = html.makeHtmlAttributes(input)
            return `<meta${attrs}>`
          })
          .join('\n')
        return minify(
          `<!doctype html>
          <html${html.makeHtmlAttributes(attributes.html)}>
            <head>
              ${metas}
              <title>${title}</title>
              ${links}
            </head>
            <body>
              <script src="js/ammo.wasm.js"></script>
              ${scripts}
            </body>
          </html>`,
          {
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            decodeEntities: true,
            minifyCSS: true,
            minifyJS: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeTagWhitespace: true,
            sortAttributes: true,
            sortClassName: true
          }
        )
      }
    })
  ]
}
