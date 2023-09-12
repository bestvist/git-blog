import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/git-blog/',
    title: 'bestvist',
    description: '追求完美，接受不完美。',
    lastUpdated: true,
    cleanUrls: true,
    themeConfig: {
        search: {
            provider: 'local'
        },
        repo: 'https://github.com/bestvist/git-blog',
        socialLinks: [{ icon: "github", link: "https://github.com/bestvist/git-blog" }],
        nav: nav(),

        sidebar: {
            '/blog/': { base: '/blog/', items: sidebarBlog() },
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present bestvist'
        }
    },
})

function nav() {
    return [
        {
            text: 'Blog',
            link: '/blog/index',
            activeMatch: '/blog/'
        }
    ]
}

function sidebarBlog() {
    return [
        {
            text: 'Blog',
            items: [
                { text: '介绍', link: 'index' },
                {
                    text: '调试',
                    base: '/blog/debug/',
                    items: [
                        { text: '远程调试APP内h5', link: 'h5debug' },
                    ]
                }
            ]
        }
    ]
}