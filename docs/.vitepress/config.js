import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Henry",
  description: "Henry's Blog",
  themeConfig: {
    logo: '/home.png',
    // siteTitle: 'Home',
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Menu',
        items: [
          { text: 'Study Notes', link:'/studynote/MESI/' },
          { text: 'Interview materials', link:'/item-2' },
          { text: 'Life', link:'/item-3' }
        ]
      }
    ],

    sidebar: 
      {
        '/studynote/': [
          {
            text: 'JUC 并发编程',
            collapsed: false,
            items: [
              {
                text: 'CPU 缓存一致性与 MESI 协议',
                link: '/studynote/MESI/'
              }
            ]
          }
        ],
      },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Henryxyc?tab=repositories' },
      { icon: 'twitter', link: 'https://twitter.com/Henryxyc714'},
      {
        icon: {
          svg: '<svg t="1689862049554" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2802" width="200" height="200"><path d="M937.4 423.9c-84 0-165.7-27.3-232.9-77.8v352.3c0 179.9-138.6 325.6-309.6 325.6S85.3 878.3 85.3 698.4c0-179.9 138.6-325.6 309.6-325.6 17.1 0 33.7 1.5 49.9 4.3v186.6c-15.5-6.1-32-9.2-48.6-9.2-76.3 0-138.2 65-138.2 145.3 0 80.2 61.9 145.3 138.2 145.3 76.2 0 138.1-65.1 138.1-145.3V0H707c0 134.5 103.7 243.5 231.6 243.5v180.3l-1.2 0.1" p-id="2803"></path></svg>'
        },
        link: 'https://v.douyin.com/iqYNQ2b/'
      }
      
    ],
    
    search: {
      provider: 'local'
    },
  }
})

