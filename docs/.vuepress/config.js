module.exports = {
    base: '/blog/',
    title: "前端名狮",
    description: "欢迎关注我的公众号【前端名狮】",
    ga: "UA-121061441-1",
    markdown: {
      lineNumbers: true
    },
    head: [
      ['link', { rel: 'icon', href: '/logo.jpg' }]
    ],
    themeConfig: {
      repo: "FEndlion/blog",
      nav: [
        {
          text: "博客",
          link: "/articles/"
        },
        {
          text: "试题精讲",
          link: "/interview/"
        },
        {
          text: "招聘信息",
          link: "/jobs/"
        },
      ],
      sidebar: {
        "/articles/": [
          {
            title: '原创文章',
            collapsable: false,
            children: [
              "activityPlatform",
              "commonPop",
              "time",
              "IntersectionObserver",
              "browser"
            ]
          }
        ],
        "/interview/": [
          {
            title: '面试题',
            collapsable: false,
            children: [
              "question/01",
              "question/02",
              "question/03",
              "question/04",
              "question/05",
              "question/06",
              "question/07",
              "question/08",
              "question/09",
              "question/10",
              "question/11"
            ]
          }
        ],
        "/jobs/": [
          {
            title: '2019年',
            collapsable: false,
            children: [
              "job-iqiyi01"
            ]
          },
        ],
      },
      lastUpdated: "更新时间",
      docsDir: "docs",
      editLinks: true,
      editLinkText: "本文源码地址"
    },
    plugins: {
      '@vuepress/medium-zoom': {
        selector: 'img',
        options: {
            margin: 16
        }
      },
      '@vuepress/back-to-top':true
    }
  };
  