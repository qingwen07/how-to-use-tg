import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const SEO_KEYWORDS = [
  'Telegram', 'how to use telegram, how to use tg', 
  'telegram guide', 'tg guide', 'telegram usage', 'telegram tips', 'telegram tricks',
  '电报', '电报怎么用', '电报怎么玩', '电报使用指南', '电报使用教程'
].join(', ')

export default {
  logo: <span>How to Use Telegram</span>,
  project: {
    link: 'https://github.com/qingwen07/how-to-use-tg'
  },
  docsRepositoryBase: 'https://github.com/qingwen07/how-to-use-tg',
  footer: {
    text: '© 2024 How to Use Telegram Guide.'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – How to Use Telegram',
    }
  },
  // head: (
  //   <>
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <meta name="keywords" content={SEO_KEYWORDS} /> 
  //     <meta name="description" content="A comprehensive guide on how to use Telegram" />
  //     {/* 基础favicon */}
  //     <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="32x32" />
      
  //     {/* 更多尺寸的PNG图标 */}
  //     <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  //     <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      
  //     {/* 针对Apple设备 */}
  //     <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
  //     {/* 针对Android设备 */}
  //     <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
  //     <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />

  //     {/* Google Analytics */}
  //     <script
  //       async
  //       src="https://www.googletagmanager.com/gtag/js?id=G-HC47H0TN39"
  //     />
  //     <script
  //       dangerouslySetInnerHTML={{
  //         __html: `
  //           window.dataLayer = window.dataLayer || [];
  //           function gtag(){dataLayer.push(arguments);}
  //           gtag('js', new Date());
  //           gtag('config', 'G-HC47H0TN39');
  //         `,
  //       }}
  //     />
  //   </>
  // )

  head() {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://howtousetg.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <title>{frontMatter.title || 'How to Use Telegram'}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Nextra'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The next site builder'}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={frontMatter.keywords || SEO_KEYWORDS} /> 
        <meta name="description" content={frontMatter.description || 'A comprehensive guide on how to use Telegram'} />
        {/* 基础favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="32x32" />
        
        {/* 更多尺寸的PNG图标 */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        
        {/* 针对Apple设备 */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* 针对Android设备 */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HC47H0TN39"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HC47H0TN39');
            `,
          }}
        />
      </>
    )
  }
}
