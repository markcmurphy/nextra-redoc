import Touchable from 'plaid-threads/Touchable'
import Logo from './public/logo.svg'

export default {
  github: 'https://github.com/bigcommerce/dev-docs',
  docsRepositoryBase: 'https://github.com/bigcommerce/dev-docs',
  titleSuffix: ' – Dev Documentation',
  logo: (
    <>
      <Touchable href="https://developer.bigcommerce.com">
        <Logo />
      </Touchable>
    </>
  ),
  // sidebar: {
  //   titleComponent({ title, type }) {
  //     if (type === 'separator') {
  //       return (
  //         <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
  //       )
  //     }
  //     // if (title === 'About') {
  //     //   return <>❓ {title}</>
  //     // }
  //     if (title === 'Welcome') {
  //       return <>❓ {title}</>
  //     }
  //     return <>👉 {title}</>
  //   },
  // },

  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Dev Documentation" />
      <meta name="og:description" content="Dev Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:title" content="Dev Documentation" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  // footerText: <>MIT {new Date().getFullYear()} © Plaid.</>,
  footerEditLink: true,
  darkMode: true,
  output: {
    // ...
    globalObject: 'this',
  },
}
