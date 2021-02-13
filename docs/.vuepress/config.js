module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    configureWebpack: {
        resolve: {
            alias: {
                '@': 'docs/' // 设置别名 
            }
        }
    },
    markdown: {
        lineNumbers: true
    }
}