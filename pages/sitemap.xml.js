const EXTERNAL_DATA_URL = 'https://howtousetg.com';

// 假设你有一个获取所有文章的函数
async function getAllPosts() {
  // 动态导入中英文的 _meta.js 文件
  const enMeta = (await import('./en/_meta.js')).default;
  const zhMeta = (await import('./zh/_meta.js')).default;
  
  const posts = [];
  
  // 处理英文页面
  Object.keys(enMeta).forEach(slug => {
    posts.push({ slug, lang: 'en' });
  });
  
  // 处理中文页面
  Object.keys(zhMeta).forEach(slug => {
    posts.push({ slug, lang: 'zh' });
  });
  
  return posts;
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
         // 如果是 index 页面，只使用语言代码
         const path = slug === 'index' ? lang : `${lang}/${slug}`;
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${path}`}</loc>
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