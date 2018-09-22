import * as path from 'path'
import externalLinks from 'remark-external-links'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

export default {
  src: './docs',
  title: 'react-animations',
  description: 'It has never been so easy to animate react',
  indexHtml: 'src/index.html',
  theme: 'src/theme/index',
  ordering: 'ascending',
  propsParser: false,
  mdPlugins: [externalLinks.default],
  htmlContext: {
    favicon: '/public/favicon.ico',
  },
  modifyBundlerConfig: config => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      '@fonts': `${PUBLIC}/fonts`,
      '@images': `${PUBLIC}/images`,
      '@components': `${SRC}/theme/components`,
      '@styles': `${SRC}/theme/styles`,
    })

    return config
  },
}
