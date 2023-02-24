
module.exports={
    title: 'test',
    description: 'test',
    base:'/blogs/',
    themeConfig: {
        // logo: 'http://www.sunboxsoft.com/img/logo.png',
        logo: 'https://images.pexels.com/photos/14667298/pexels-photo-14667298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        nav: [
            { text: '首页', link: '/' },
            { text: '工作计划', link: 'https://doc.weixin.qq.com/sheet/e3_ABAAiQZVAOwb0w3ITubTQmFGfnYew?scode=ALgA5AfeAAc78RINpAAJUAZgZaAOw&tab=e4bime' },
            { text: '各环境菜单', link: 'https://doc.weixin.qq.com/sheet/e3_AJUAZgZaAOwLpnAD70NSo611y1CKR?scode=ALgA5AfeAAcAkH1AeEAJUAZgZaAOw&tab=BB08J2' },
            // {
            //     text: '工作文档',
            //     ariaLabel: '工作文档',
            //     items: [
            //         { text: '下拉1', link: '/', target:'_self' },
            //         { text: '下拉2', link: 'https://u1s1.vip', target:'_blank' }
            //     ]
            // }
        ],
        sidebar: [
            {
                title: '组件使用',   // 必要的
                path: 'comp-docs/one',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 3,    // 可选的, 默认值是 1
            },
            {
                title: '组件使用',   // 必要的
                path: 'comp-docs/two',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 3,    // 可选的, 默认值是 1
            },
        ],
        sidebarDepth: 3
    }
}