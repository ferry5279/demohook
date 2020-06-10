const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/apb', {
            target: 'http://api.baxiaobu.com',
            changeOrigin: true,
            pathRewrite: {
                '^/apb': ''
            }
        }),
    )
    app.use(
        createProxyMiddleware('/apa', {
            target: 'https://blog.zdldove.top/',
            changeOrigin: true,
            pathRewrite: {
                '^/apa': ''
            }
        }),
    )
    app.use(http: //134.175.115.202
        createProxyMiddleware('/aps', {
            target: 'http://vueshop.glbuys.com',
            changeOrigin: true,
            pathRewrite: {
                '^/aps': ''
            }
        }),
    )
    app.use(
        createProxyMiddleware('/apd', {
            target: 'http://134.175.115.202',
            changeOrigin: true,
            pathRewrite: {
                '^/apd': ''
            }
        }),
    )
}