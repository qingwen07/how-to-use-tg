const EXTERNAL_DATA_URL = 'https://howtousetg.com';

// 假设你有一个获取所有文章的函数
async function getAllPosts() {
  // 实现获取所有文章的逻辑
  return [
    { slug: 'tips', lang: 'en' },
    { slug: 'tips', lang: 'zh' },
    { slug: 'security', lang: 'en' },
    { slug: 'security', lang: 'zh' },
    { slug: 'advanced-features', lang: 'en' },
    { slug: 'advanced-features', lang: 'zh' },
    { slug: 'basic-features', lang: 'en' },
    { slug: 'basic-features', lang: 'zh' },
    { slug: 'installation', lang: 'en' },
    { slug: 'installation', lang: 'zh' },
    { slug: 'telegram-without-phone', lang: 'en' },
    { slug: 'telegram-without-phone', lang: 'zh' },
    { slug: 'how-to-find-telegram-channels', lang: 'en' },
    { slug: 'how-to-find-telegram-channels', lang: 'zh' },
    // ... 更多文章
  ];
}

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- 添加固定页面 -->
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <!-- 添加动态页面 -->
     ${posts
       .map(({ slug, lang }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${lang}/${slug}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.8</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // 获取所有文章
  const posts = await getAllPosts();
  
  // 生成 XML sitemap
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // 发送生成的sitemap
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;