module.exports = {
    title: 'Laravel Shop',
    description: 'laravel 商城，b2c，b2b2c，laravel shop,laravel store',
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [{
                text: '文档',
                link: '/'
            },
            {
                text: '教程',
                link: '/guide/'
            },
            {
                text: '演示',
                items: [{
                        text: 'pcweb演示',
                        link: '/language/chinese'
                    },
                    {
                        text: 'wap手机端演示',
                        link: '/language/japanese'
                    }, {
                        text: '小程序演示',
                        link: '/language/japanese'
                    },
                    {
                        text: 'pc后台演示',
                        link: '/language/japanese'
                    }
                ]
            },
        ],
        repo: 'vuejs/vuepress',
        repoLabel: '查看源码',
        docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        displayAllHeaders: false,
        sidebar: [
            ['/','概述'],
            ['/entry/', '入口'],
            ['/dir/', '目录结构'],
            ['/feature/','功能'],
            ['/db/','数据库'],
            ['/dev/', '二次开发'],
        ]
    }
}