module.exports = {
  "title": "野猿新知著",
  "description": "享受编程和技术所带来的快乐",
  "dest": "dist",
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "script",
      {
        "src": "https://cdn.bootcdn.net/ajax/libs/graingert-wow/1.2.2/wow.min.js"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "meta",
      {
        "name": "keywords",
        "content": "野猿新知著,段晓刚,段晓刚的个人博客,web前端,计算机,Vue,Vuepress,JavaScript,CSS,HTML"
      }
    ]
  ],
  //"theme": "reco",
  "themeConfig": {
    "lastUpdated": false,
    "nav": [{
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "留言板",
        "icon": "reco-suggestion",
        "link": "/blogs/comment"
      },
      {
        "text": "关于我",
        "icon": "reco-account",
        "link": "/blogs/about"
      }
    ],
    "sidebar": {
      "/blogs/book/": [
        "2020-03-14",
        "2020-03-12",
        "2020-03-02",
        "2020-02-27",                      
      ],
      "/blogs/essay/": [
        "2020-06-23",
        "2020-06-15",
        "2020-05-20",
        "2020-05-24",
        "2020-04-08",
        "2020-03-04",
        "2020-02-28",
        "2019-11-19",
        "2019-11-04",
        "2019-10-22",
        "2019-10-01",       
      ],
      "/blogs/tech/": [
        {
          "title": "HTML",
          "collapsable": true,
          "children": [
            "",
          ]
        },
        {
          "title": "CSS",
          "collapsable": true,
          "children": [
            "2020-03-17",
            "2020-03-15",
            "2020-03-14"
          ]
        },
        {
          "title": "JavaScript",
          "collapsable": true,
          "children": [
            "2020-09-28",
          ]
        },
        {
          "title": "Vue.js",
          "collapsable": true,
          "children": [
            "2021-01-15",
          ]
        },
        {
          "title": "Node.js",
          "collapsable": true,
          "children": [
            "",
          ]
        },
        {
          "title": "webpack",
          "collapsable": true,
          "children": [
            "2020-03-26",
          ]
        },
        {
          "title": "浏览器",
          "collapsable": true,
          "children": [
            "",
          ]
        },
        {
          "title": "计算机网络",
          "collapsable": true,
          "children": [
            "",
          ]
        },
        {
          "title": "数据结构与算法",
          "collapsable": true,
          "children": [
            "",
          ]
        },
        {
          "title": "操作系统",
          "collapsable": true,
          "children": [
            "2021-03-01",
          ]
        },
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      },
      "socialLinks": [
        {
          "link": "https://github.com/JOJO567",
          "icon": "reco-github",
          "color": "var(--text-color)"
        },
        {
          "link": "https://juejin.cn/user/1028798616712669",
          "icon": "reco-juejin",
          "color": "#007fff"
        },
        {
          "link": "https://segmentfault.com/u/chris_duan",
          "icon": "reco-sf",
          "color": "#009a61"
        },
        {
          "link": "mailto:xg_duan@163.com",
          "icon": "reco-mail",
          "color": "#999"
        },
      ]
    },
    "friendLink": [{
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "logo": "https://www.recoluan.com/head.png",
        "link": "https://www.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    // "lastUpdated": "上次更新",
    "author": "Chris_Duan",
    "authorAvatar": "/avatar.jpg",
    "record": "滇ICP备20000675号-1",
    "recordLink": "https://beian.miit.gov.cn/",
    "startYear": "2019",
    "valineConfig": {
      "appId": "lRACTf7lUn36ScQInWm5WTGD-gzGzoHsz",// your appId
      "appKey": "0gWFyf1HvqAHhGDBNc8fC5Vp",// your appKey
      "notify": true,//receive email notification
      "verify": true,//show verification code
      "placeholder": "📌在昵称框内输入QQ号将自动拉取昵称和头像\n🚀评论和回复支持 Markdown",//comment box placeholder text
      "avatar": "mp",
      "enableQQ": true,
      "requiredFields": ["nick","mail"],
    },
    "mottos": [{
      "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
      "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
      },
      {
        "zh": "少即是多。",
        "en": "Less is more."
      },
      {
        "zh": "重要的道理总是朴素的道理。",
        "en": "The important truth is always the simple truth."
      },
      {
        "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
        "en": "Don't worry about the vague future, just strive for the clear present."
      },
      {
        "zh": "世界上最平凡的想法莫过于我是一个不平凡的人。",
        "en": "Nothing is so common-place as to wish to be remarkable."
      }, {
        "zh": "新的一天，新的开始。",
        "en": "New day, new begining."
      },
      {
        "zh": "纵有疾风起，人生不言弃。",
        "en": "In spite of the strong wind, you can never give up."
      }
    ],
    "covers": [
      "https://qiniu.duanxiaogang.cn/1.jpg",
      "https://qiniu.duanxiaogang.cn/2.jpg",
      "https://qiniu.duanxiaogang.cn/3.jpg",
      "https://qiniu.duanxiaogang.cn/4.jpg",
      "https://qiniu.duanxiaogang.cn/5.jpg",
      "https://qiniu.duanxiaogang.cn/6.jpg",
      "https://qiniu.duanxiaogang.cn/7.jpg",
      "https://qiniu.duanxiaogang.cn/8.jpg",
      "https://qiniu.duanxiaogang.cn/9.jpg",
      "https://qiniu.duanxiaogang.cn/10.jpg",
      "https://qiniu.duanxiaogang.cn/11.jpg",
      "https://qiniu.duanxiaogang.cn/12.jpg",
      "https://qiniu.duanxiaogang.cn/13.jpg"
    ],
    "blogCovers": [
      "https://qiniu.duanxiaogang.cn/764891300.jpg",
      "https://qiniu.duanxiaogang.cn/768173080.jpg",
      "https://qiniu.duanxiaogang.cn/770759070.jpg",
      "https://qiniu.duanxiaogang.cn/772488560.jpg",
      "https://qiniu.duanxiaogang.cn/772712060.jpg",
      "https://qiniu.duanxiaogang.cn/774090020.jpg",
      "https://qiniu.duanxiaogang.cn/776841640.jpg",
      "https://qiniu.duanxiaogang.cn/776997350.jpg",
      "https://qiniu.duanxiaogang.cn/804756620.jpg",
      "https://qiniu.duanxiaogang.cn/806515280.jpg",
      "https://qiniu.duanxiaogang.cn/806728640.jpg",
      "https://qiniu.duanxiaogang.cn/807170400.jpg",
      "https://qiniu.duanxiaogang.cn/807943320.jpg",
      "https://qiniu.duanxiaogang.cn/812929320.jpg",
      "https://qiniu.duanxiaogang.cn/813253690.jpg",
      "https://qiniu.duanxiaogang.cn/815846250.png",
      "https://qiniu.duanxiaogang.cn/816111190.jpg",
      "https://qiniu.duanxiaogang.cn/816413730.jpg",
      "https://qiniu.duanxiaogang.cn/816679440.jpg",
      "https://qiniu.duanxiaogang.cn/817942200.jpg",
      "https://qiniu.duanxiaogang.cn/818969910.jpg",
      "https://qiniu.duanxiaogang.cn/819210520.jpg",
      "https://qiniu.duanxiaogang.cn/819677170.jpg",
      "https://qiniu.duanxiaogang.cn/820905830.jpg",
      "https://qiniu.duanxiaogang.cn/821087660.jpg",
      "https://qiniu.duanxiaogang.cn/821345290.jpg",
      "https://qiniu.duanxiaogang.cn/823231480.jpg",
      "https://qiniu.duanxiaogang.cn/827983140.png",
      "https://qiniu.duanxiaogang.cn/829765970.png",
      "https://qiniu.duanxiaogang.cn/830136210.png",
      "https://qiniu.duanxiaogang.cn/834018100.png",
      "https://qiniu.duanxiaogang.cn/835327810.png",
      "https://qiniu.duanxiaogang.cn/835580020.png",
      "https://qiniu.duanxiaogang.cn/837534250.png",
      "https://qiniu.duanxiaogang.cn/837951130.png",
      "https://qiniu.duanxiaogang.cn/838365030.png",
      "https://qiniu.duanxiaogang.cn/845701950.png",
      "https://qiniu.duanxiaogang.cn/848835140.png",
      "https://qiniu.duanxiaogang.cn/849028500.png"
    ]
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    [
      "dynamic-title",
      {
        "showIcon": "/favicon.ico",
        "showText": "Welcome back！ ",
        "hideIcon": "/favicon.ico",
        "hideText": "Wait...",
        "recoverTime": 2000
      }
    ],
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        "copyText": "复制代码",
        "tip": {
            "content": "复制成功!"
        }
      }
    ],
    [
      "@vuepress/pwa",
      {
        "serviceWorker": true,
        "updatePopup": {
            "message": "发现新内容可用",
            "buttonText": "刷新"
        }
      }
    ],
    [
      "flowchart"
    ]
  ]
}