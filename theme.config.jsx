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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={SEO_KEYWORDS} /> 
      <meta name="description" content="A comprehensive guide on how to use Telegram" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

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
